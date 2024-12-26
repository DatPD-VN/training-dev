import { TDataProductProps } from "./type";
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
  const setListNew = setDataProducts();

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
  const handleSetList = (newLists: TListProduct[]) => {
    const updateList = newLists.map((item, index) => ({
      ...item,
      displayOrder: index + 1,
    }));
    setListNew(updateList);
  };
  return {
    lists,
    isLoading,
    handleSetList,
  };
};
