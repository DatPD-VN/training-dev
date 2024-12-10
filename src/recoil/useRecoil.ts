import { useRecoilValue } from "recoil";
import {
  addCategory,
  handleSuggest,
  listCategory,
  listSearch,
  newListState,
} from "./listState";
import {
  addCartState,
  countCartState,
  searchCartState,
  totalCartState,
} from "./listCart";
// Use State
export const useNewListState = () => {
  return useRecoilValue(newListState);
};
export const useListSearch = () => {
  return useRecoilValue(listSearch);
};
export const useListSuggest = () => {
  return useRecoilValue(handleSuggest);
};
export const useListCategory = () => {
  return useRecoilValue(listCategory);
};
export const useListNewCategory = () => {
  return useRecoilValue(addCategory);
};

// Use Cart
export const useListCartState = () => {
  return useRecoilValue(addCartState);
};
export const useCountCartState = () => {
  return useRecoilValue(countCartState);
};
export const useTotalCartState = () => {
  return useRecoilValue(totalCartState);
};
export const useListSearchCartState = () => {
  return useRecoilValue(searchCartState);
};
