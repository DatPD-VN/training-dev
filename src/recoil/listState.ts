import { atom, RecoilState, selector } from "recoil";
import { categoryState, dataState } from "../mock/mock-api";
import { TCategoryState, TDataState } from "./type";

const dataProducts = JSON.parse(localStorage.getItem("Data") as string);
const defaultData = dataProducts ? dataProducts : dataState;

const listTodoState: any = atom<TDataState[]>({
  key: "listTodo",
  default: defaultData,
});

const dataSearch: Array<TDataState> = [];

const listSearchState: RecoilState<TDataState[]> = atom<TDataState[]>({
  key: "listSearch",
  default: dataSearch,
});
const listSuggest: string[] = [];

const listSuggestState: RecoilState<string[]> = atom<string[]>({
  key: "listSuggest",
  default: listSuggest,
});

const listCategories = categoryState;

const listCategoriesState: RecoilState<TCategoryState[]> = atom<
  TCategoryState[]
>({
  key: "listCategory",
  default: listCategories,
});

const resultCategories: Array<TCategoryState> = [];

const resultCategoriesState: RecoilState<TCategoryState[]> = atom<
  TCategoryState[]
>({
  key: "resultCategory",
  default: resultCategories,
});

export const newListState = selector({
  key: "newList",
  get: ({ get }) => {
    const list: Array<TDataState> = get(listTodoState);
    return list;
  },
  set: ({ set }, newValue: any) => {
    set(listTodoState, [...newValue]);
  },
});
export const listSearch = selector({
  key: "handleSearch",
  get: ({ get }) => {
    const list: Array<TDataState> = get(listSearchState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const listState: Array<TDataState> = get(listTodoState);
    const regex = new RegExp(data, "i");
    const value = listState.filter((item: TDataState) => {
      if (Array.isArray(item.hashTag) || Array.isArray(item.titleProduct)) {
        const isMatchInHashTag = Array.isArray(item.hashTag)
          ? item.hashTag.some((hashTag: string) => regex.test(hashTag))
          : regex.test(item.hashTag);

        const isMatchInTitleProduct = Array.isArray(item.titleProduct)
          ? item.titleProduct.some((title: string) => regex.test(title))
          : regex.test(item.titleProduct);

        return isMatchInHashTag || isMatchInTitleProduct;
      }
      return regex.test(item.hashTag) || regex.test(item.titleProduct);
    });
    set(listSearchState, [...value]);
  },
});
export const handleSuggest = selector({
  key: "handleSuggest",
  get: ({ get }) => {
    const list: string[] = get(listSuggestState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const listState: Array<TDataState> = get(listTodoState);
    const hashTag = listState.flatMap((item: TDataState) => item.hashTag);
    const Fitter = [...new Set(hashTag)];
    const regex = new RegExp(data, "i");
    const value = Fitter.filter((hashTag: string) => regex.test(hashTag));
    set(listSuggestState, [...value]);
  },
});
export const listCategory = selector({
  key: "handleCategories",
  get: ({ get }) => {
    const listState: Array<TCategoryState> = get(listCategoriesState);
    return listState;
  },
  set: ({}) => {},
});
export const addCategory = selector({
  key: "handleAddCategories",
  get: ({ get }) => {
    const listState: Array<TCategoryState> = get(resultCategoriesState);
    return listState;
  },
  set: ({ set }, data: any) => {
    const value = [
      {
        categoryID: data,
      },
    ];
    set(listSearchState, []);
    set(resultCategoriesState, [...value]);
  },
});
export const addDetailCategory = selector({
  key: "handleAddDetailCategories",
  get: ({ get }) => {
    const listState: Array<TCategoryState> = get(resultCategoriesState);
    return listState;
  },
  set: ({ set }, data: any) => {
    const { categoryID, itemDetailID } = data;

    const value = [
      {
        categoryID,
        categoryDetailId: itemDetailID,
      },
    ];
    set(listSearchState, []);
    set(resultCategoriesState, [...value]);
  },
});
export const delCategory = selector({
  key: "handleDelCategories",
  get: ({ get }) => {
    const listState: Array<TCategoryState> = get(resultCategoriesState);
    return listState;
  },
  set: ({ set }) => {
    set(resultCategoriesState, []);
    set(listSearchState, []);
  },
});
