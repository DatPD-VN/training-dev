import { atom, selector } from "recoil";
import { categoryState, dataState } from "../mock/mock-api";

const defaultData = dataState;

const listTodoState: any = atom({
  key: "listTodo",
  default: defaultData,
});

const dataSearch: Array<object> = [];

const listSearchState: any = atom({
  key: "listSearch",
  default: dataSearch,
});
const listSuggest: Array<object> = [];

const listSuggestState: any = atom({
  key: "listSuggest",
  default: listSuggest,
});

const listCategories = categoryState;

const listCategoriesState: any = atom({
  key: "listCategory",
  default: listCategories,
});
const resultCategories: Array<object> = [];

const resultCategoriesState: any = atom({
  key: "resultCategory",
  default: resultCategories,
});

export const newListState = selector({
  key: "newList",
  get: ({ get }) => {
    const list: Array<object> = get(listTodoState);
    return list;
  },
  set: ({ get, set }, newValue) => {
    const list: Array<object> = get(listTodoState);
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
    const list: Array<object> = get(listSearchState);
    return list;
  },
  set: ({ get, set }, data : any) => {
    const listState: Array<object> = get(listTodoState);
    const regex = new RegExp(data, "i");
    const value = listState.filter(
      (item: any) => regex.test(item.hashTag) || regex.test(item.titleProduct)
    );
    set(listSearchState, [...value]);
  },
});
export const handleSuggest = selector({
  key: "handleSuggest",
  get: ({ get }) => {
    const list: Array<object> = get(listSuggestState);
    return list;
  },
  set: ({ get, set }, data : any) => {
    const listState: Array<object> = get(listTodoState);
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
    const listState: Array<object> = get(listCategoriesState);
    return listState;
  },
  set: ({}) => {},
});
export const addCategory = selector({
  key: "handleAddCategories",
  get: ({ get }) => {
    const listState: Array<object> = get(resultCategoriesState);
    return listState;
  },
  set: ({ get, set }, data : any) => {
    const listState: Array<object> = get(listTodoState);
    const regex = new RegExp(data, "i");
    const value = listState.filter((item: any) => regex.test(item.categoryID));
    set(listSearchState, []);
    set(resultCategoriesState, [...value]);
  },
});
export const delCategory = selector({
  key: "handleDelCategories",
  get: ({ get }) => {
    const listState: Array<object> = get(resultCategoriesState);
    return listState;
  },
  set: ({ set }) => {
    set(resultCategoriesState, []);
    set(listSearchState, []);
  },
});

