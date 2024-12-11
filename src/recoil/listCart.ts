import { atom, selector } from "recoil";
import { TCartState } from "./type";

const defaultData: Array<TCartState> = [];

const listCartState: any = atom({
  key: "listCart",
  default: defaultData,
});
const searchData: Array<TCartState> = [];

const listSearchState: any = atom({
  key: "listCartSearch",
  default: searchData,
});

export const addCartState = selector({
  key: "newCart",
  get: ({ get }) => {
    const list : Array<TCartState> = get(listCartState);
    return list;
  },
  set: ({ get, set }, item: any) => {
    const { quantity } = item;
    const list: Array<TCartState> = get(listCartState);
    const check = list.find((itemList: TCartState) => itemList.id === item.id);

    if (check) {
      if (quantity === 1) {
        const newTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? { ...itemDetail, quantity: (itemDetail.quantity) + 1 }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        return;
      } else {
        const newTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? {
                ...itemDetail,
                quantity: (itemDetail.quantity) + parseInt(quantity),
              }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        return;
      }
    } else {
      const newTodo = item;
      set(listCartState, [...list, newTodo]);
    }
  },
});
export const selectCartState = selector({
  key: "selectCart",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
});
export const delCartState = selector({
  key: "delCart",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, id) => {
    const list : Array<TCartState> = get(listCartState);
    const newTodo = list.filter((item: TCartState) => item.id !== id);
    set(listCartState, [...newTodo]);
  },
});
export const delCartStateAll = selector({
  key: "delCartAll",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, id: any) => {
    const list: Array<TCartState> = get(listCartState);
    const newTodo = list.filter((item: TCartState) => !id.includes(item.id));
    set(listCartState, [...newTodo]);
  },
});

export const handleCartState = selector({
  key: "handleCart",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const { handle, item } = data;
    const list: Array<TCartState> = get(listCartState);

    switch (handle) {
      case "tang":
        const newTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? { ...itemDetail, quantity: (itemDetail.quantity) + 1 }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        break;
      case "giam":
        let neTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? {
                ...itemDetail,
                quantity: Math.max(1, (itemDetail.quantity) - 1),
              }
            : itemDetail
        );
        set(listCartState, [...neTodo]);
        break;
      default:
        break;
    }
  },
});

export const countCartState = selector({
  key: "countCart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listCartState);
    return list.length;
  },
  set: ({ get, set }, item) => {
    const list: Array<TCartState> = get(listCartState);
    const newTodo = {
      item,
    };
    set(listCartState, [...list, newTodo]);
  },
});
export const totalCartState = selector({
  key: "totalcart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listCartState);
    const totalCart = list.reduce((total: number, item: TCartState) => {
      return total + item.priceProduct * item.quantity;
    }, 0);
    return totalCart;
  },
  set: ({ get, set }, item) => {
    const list: Array<TCartState> = get(listCartState);
    const newTodo = {
      item,
    };

    set(listCartState, [...list, newTodo]);
  },
});
export const searchCartState = selector({
  key: "searchcart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listSearchState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const list: Array<TCartState> = get(listCartState);
    const regex = new RegExp(data, "i");
    const value = list.filter((item: TCartState) => regex.test(item.titleProduct));
    set(listSearchState, [...value]);
  },
});

