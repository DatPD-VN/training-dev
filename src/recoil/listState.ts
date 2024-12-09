import { atom, selector } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, dataState } from "../mock/mock-api";

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

const listCategories = categoryState;

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
export const handleSuggest = selector({
  key: "handleSuggest",
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
  set: ({  }) => {
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
    const value = listState.filter((item: any) => regex.test(item.categoryID));
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

// Use
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

// Set
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
export const setDelCategory = () => {
  return useSetRecoilState(delCategory);
};
