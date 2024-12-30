import { useSetRecoilState } from "recoil";
import {
  addCartState,
  delCartState,
  delCartStateAll,
  handleCartState,
  handleChoiceProduct,
  handleDelCartAfterSubmit,
  searchCartState,
} from "./listCart";
import {
  addCategory,
  addDetailCategory,
  delCategory,
  handleSuggest,
  listCategory,
  listSearch,
  newListState,
} from "./listState";

// Set Cart
export const setHandleCartState = () => {
  return useSetRecoilState(handleCartState);
};
export const setListCartState = () => {
  return useSetRecoilState(addCartState);
};
export const setDelCartState = () => {
  return useSetRecoilState(delCartState);
};
export const setDelAllCartState = () => {
  return useSetRecoilState(delCartStateAll);
};
export const setSearchCartState = () => {
  return useSetRecoilState(searchCartState);
};
export const setHandleChoiceProductState = () => {
  return useSetRecoilState(handleChoiceProduct);
};
export const setHandleDelCartAfterSubmit = () => {
  return useSetRecoilState(handleDelCartAfterSubmit);
};

// Set State
export const setListSearch = () => {
  return useSetRecoilState(listSearch);
};
export const setListSuggest = () => {
  return useSetRecoilState(handleSuggest);
};
export const setListCategory = () => {
  return useSetRecoilState(listCategory);
};
export const setAddCategory = () => {
  return useSetRecoilState(addCategory);
};
export const setAddDetailCategory = () => {
  return useSetRecoilState(addDetailCategory);
};
export const setDelCategory = () => {
  return useSetRecoilState(delCategory);
};
export const setDataProducts = () => {
  return useSetRecoilState(newListState);
};
