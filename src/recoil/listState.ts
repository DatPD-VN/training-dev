import { atom, selector } from "recoil";
import dataState from "../mock/mock-api";

const defaultData = dataState;

const listTodoState: any = atom({
  key: "listTodo",
  default: defaultData,
});

const dataSearch: Array<string> = [];

const listSearchState: any = atom({
  key: "listSearch",
  default: dataSearch,
});
const listSuggest: Array<string> = [];

const listSuggestState: any = atom({
  key: "listSuggest",
  default: listSuggest,
});

const listCategories: Array<string> = [];

const listCategoriesState: any = atom({
  key: "listCategory",
  default: listCategories,
});
const resultCategories: Array<string> = [];

const resultCategoriesState: any = atom({
  key: "resultCategory",
  default: resultCategories,
});

export const newListState = selector({
  key: "newList",
  get: ({ get }) => {
    const list: any = get(listTodoState);
    return list;
  },
  set: ({ get, set }, newValue) => {
    const list: any = get(listTodoState);
    const newTodo = {
      id: new Date().getTime(),
      content: newValue,
      status: "new",
    };

    set(listTodoState, [...list, newTodo]);
  },
});
export const listSearch = selector({
  key: "handleSearch",
  get: ({ get }) => {
    const list: any = get(listSearchState);
    return list;
  },
  set: ({ get, set }, data) => {
    const listState: any = get(listTodoState);
    const regex = new RegExp(data, "i");
    const value = listState.filter(
      (item: any) => regex.test(item.hashTag) || regex.test(item.titleProduct)
    );
    set(listSearchState, [...value]);
  },
});
export const listSugggest = selector({
  key: "handleSugggest",
  get: ({ get }) => {
    const list: any = get(listSuggestState);
    return list;
  },
  set: ({ get, set }, data) => {
    const listState: any = get(listTodoState);
    const hashTag = listState.flatMap((item: any) => item.hashTag);
    const Fitter = [...new Set(hashTag)];
    const regex = new RegExp(data, "i");
    const value = Fitter.filter((hashTag: any) => regex.test(hashTag));
    set(listSuggestState, [...value]);
  },
});
export const listCategory = selector({
  key: "handleCategories",
  get: ({ get }) => {
    const listState: any = get(listCategoriesState);
    return listState;
  },
  set: ({ get, set }) => {
    const listState: any = get(listTodoState);
    const category = listState.flatMap((item: any) => item.categories);
    const Fitter = [...new Set(category)];
    set(listCategoriesState, [...Fitter]);
  },
});
export const addCategory = selector({
  key: "handleAddCategories",
  get: ({ get }) => {
    const listState: any = get(resultCategoriesState);
    return listState;
  },
  set: ({ get, set }, data) => {
    const listState: any = get(listTodoState);
    const regex = new RegExp(data, "i");
    const value = listState.filter((item: any) => regex.test(item.categories));
    set(listSearchState, []);
    set(resultCategoriesState, [...value]);
  },
});
export const delCategory = selector({
  key: "handleDelCategories",
  get: ({ get }) => {
    const listState: any = get(resultCategoriesState);
    return listState;
  },
  set: ({ set }) => {
    set(resultCategoriesState, []);
    set(listSearchState, []);
  },
});
