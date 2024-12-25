import { TListProduct, TListProductChange, TUseProductProps } from "./type";
import { useEffect, useState } from "react";
import {
  useNewListState,
  useListSearch,
  useListNewCategory,
  setListSearch,
  setAddCategory,
  setDataProducts,
} from "../../recoil";
import { DELAY_DEFAULT } from "../../const";
import { useLocation } from "react-router";
import { TDataState } from "../../recoil/type";

export const useProduct = (): TUseProductProps => {
  const location = useLocation();
  const hashtag = location.state;
  const newList: Array<TDataState> = useNewListState();
  const setListNew = setDataProducts();
  const newSearch: Array<TDataState> = useListSearch();
  const newCategories: Array<TDataState> = useListNewCategory();
  const choiceHashtag = setListSearch();
  const choiceCategory = setAddCategory();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Handle Drag Product
   * @param event: React.DragEvent<HTMLDivElement>,
   * @param product: TListProduct
   */
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    product: TDataState
  ) => {
    event.dataTransfer.setData("product", JSON.stringify(product));
  };

  useEffect(() => {
    if (newSearch.length === 0) {
      if (hashtag) {
        if (hashtag.hashtag) {
          choiceHashtag(hashtag.hashtag);
        }
        if (hashtag.category) {
          choiceCategory(hashtag.category);
        }
      }
    }
  }, [hashtag]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, DELAY_DEFAULT);
  }, [newSearch, newCategories]);

  const listProduct =
    hashtag !== null
      ? newSearch
      : newCategories.length === 0
      ? newList
      : newCategories;

  const listProducts = listProduct.map((item, index) => ({
    ...item,
    displayOrder: index + 1,
  }));

  useEffect(() => {
    setLists(listProducts);
  }, [listProduct]);

  const [lists, setLists] = useState(listProducts);

  /**
   * Handle Set List Product
   * @param newList: TListProduct[]
   *
   */
  const handleSetList = (newLists: TDataState[]) => {
    const updateList = newLists.map((item, index) => ({
      ...item,
      displayOrder: index + 1,
    }));
    const newTodo = updateList.map((item, index) => {
      const newTodo2 = newList[index];

      const isCheck = Object.keys(item).some((key) => item[key] !== newTodo2[key]);

      return isCheck && newList[index]

    });

    // const changeList = newLists.filter((item, index) => {
    //   return item.displayOrder !== lists[index].displayOrder;
    // });
    // console.log("Các Sản Phẩm Thay Đổi", changeList);

    // setLists(updateList);
    setListNew(updateList);
  };

  return {
    lists,
    isLoading,
    handleDragStart,
    handleSetList,
  };
};
