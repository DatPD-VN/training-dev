import { TUseProductProps } from "./type";
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
import { TCategoryId, TDataState } from "../../recoil/type";

export const useProduct = (): TUseProductProps => {
  const location = useLocation();
  const hashtag = location.state;
  const newList: Array<TDataState> = useNewListState();
  const setListNew = setDataProducts();
  const newSearch: Array<TDataState> = useListSearch();
  const newCategories: Array<TCategoryId> = useListNewCategory();
  const choiceHashtag = setListSearch();
  const choiceCategory = setAddCategory();
  const [isLoading, setIsLoading] = useState(true);
  const [listCategory, setListCategory] = useState<TDataState[]>([]);

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
    if (newCategories) {
      if (
        newCategories[0]?.categoryID !== null &&
        newCategories[0]?.categoryDetailId == null
      ) {
        const valueCategories = newCategories.map((category) => {
          const listCategories = newList.filter((item: TDataState) => {
            return category.categoryID == item.categoryID;
          });
          return [...listCategories];
        });
        setListCategory(valueCategories[0]);
      } else {
        const valueCategories = newCategories.map((category) => {
          const listCategories = newList.filter((item: TDataState) => {
            return category.categoryID == item.categoryID;
          });
          const valueResult = listCategories.filter(
            (item: TDataState) =>
              category.categoryDetailId == item.categoryDetailId
          );
          return [...valueResult];
        });
        setListCategory(valueCategories[0]);
      }
    }
  }, [newCategories]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, DELAY_DEFAULT);
  }, [newSearch, newCategories]);

  const listProduct =
    hashtag !== null
      ? newSearch
      : listCategory === undefined
      ? newList
      : listCategory;

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
   * @param newLists: TListProduct[]
   *
   */
  const handleSetList = (newLists: TDataState[]) => {
    const updateList = newLists.map((item, index) => ({
      ...item,
      displayOrder: index + 1,
    }));
    setLists(updateList);

    const mergedList = newList.map((updateItem) => {
      const matchingItem = updateList.find(
        (newItem) => newItem.id === updateItem.id
      );

      if (matchingItem) {
        return { ...updateItem, ...matchingItem };
      }

      return updateItem;
    });

    const result = mergedList.sort((a, b) => {
      const A = a.displayOrder || 0;
      const B = b.displayOrder || 0;

      return A - B;
    });

    const isDifferent = mergedList.some(
      (item, index) => item !== newList[index]
    );
    if (isDifferent) {
      setListNew(result);
    }
  };

  return {
    lists,
    isLoading,
    handleDragStart,
    handleSetList,
  };
};
