import { TUseProductProps } from "./type";
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

export const useProduct = (): TUseProductProps => {
  const location = useLocation();
  const hashtag = location.state;
  const newList: Array<object> = useNewListState();
  const newSearch: Array<object> = useListSearch();
  const newCategories: Array<object> = useListNewCategory();
  const choiceHashtag: any = setListSearch();
  const choiceCategory: any = setAddCategory();
  const [isLoading, setIsLoading] = useState(true);

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

  return {
    listProduct,
    isLoading,
  };
};
