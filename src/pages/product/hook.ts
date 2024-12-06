import { TUseProductProps } from "./type";
import { useEffect, useState } from "react";
import {
  useNewListState,
  useListSearch,
  useListNewCategory,
  setListSearch,
} from "../../recoil";
import { DELAY_DEFAULT } from "../../const";
import { useLocation } from "react-router";

export const UseProduct = (): TUseProductProps => {
  const location = useLocation();
  const hashtag = location.state;
  const newList: Array<string> = useNewListState();
  const newSearch: Array<string> = useListSearch();
  const newCategories: Array<string> = useListNewCategory();
  const choise: any = setListSearch();
  const [isLoading, setIsLoading] = useState(true);

  if (newSearch.length === 0) {
    if (hashtag) {
      choise(hashtag.hashtag);
    }
  }

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

  return {
    listProduct,
    isLoading,
  };
};
