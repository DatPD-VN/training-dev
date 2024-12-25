import { TDataProductProps } from "./type";
import { useEffect, useState } from "react";
import {
  useNewListState,
  useListSearch,
  useListNewCategory,
  setListSearch,
  setAddCategory,
} from "../../recoil";
import { DELAY_DEFAULT } from "../../const";
import { useLocation } from "react-router";
import { TListProduct } from "../product/type";

export const useDataProducts = (): TDataProductProps => {
  const location = useLocation();
  const hashtag = location.state;
  const newList: Array<TListProduct> = useNewListState();
  const newSearch: Array<TListProduct> = useListSearch();
  const newCategories: Array<TListProduct> = useListNewCategory();
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
    product: TListProduct
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
  const handleSetList = (newLists: TListProductChange[]) => {
    const updateList = newLists.map((item, index) => ({
      ...item,
      displayOrder: index + 1,
    }));

    // const changeList = newLists.filter((item, index) => {
    //   return item.displayOrder !== lists[index].displayOrder;
    // });
    // console.log("Các Sản Phẩm Thay Đổi", changeList);

    setLists(updateList);
  };
  return {
    lists,
    isLoading,
    handleDragStart,
    handleSetList,
  };
};
