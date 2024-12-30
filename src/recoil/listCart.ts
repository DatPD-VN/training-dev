import { atom, RecoilState, selector } from "recoil";
import { TCartState } from "./type";

const defaultData: TCartState[] = [];

const listCartState: RecoilState<TCartState[]> = atom<TCartState[]>({
  key: "listCart",
  default: defaultData,
});
const searchData: TCartState[] = [];

const listSearchState: RecoilState<TCartState[]> = atom<TCartState[]>({
  key: "listCartSearch",
  default: searchData,
});

export const addCartState = selector({
  key: "newCart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listCartState);
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
            ? {
                ...itemDetail,
                quantity: itemDetail.quantity + 1,
              }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        return;
      } else {
        const newTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? {
                ...itemDetail,
                quantity: itemDetail.quantity + parseInt(quantity),
              }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        return;
      }
    } else {
      const newTodo = { ...item, choice: false };
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
  set: ({ get, set }, id: any) => {
    const list: Array<TCartState> = get(listCartState);
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
export const handleDelCartAfterSubmit = selector({
  key: "handleDelCartAfterSubmit",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const list: Array<TCartState> = get(listCartState);
    const idProducts = data.flatMap((item: TCartState) => item.id);
    const Fitter = [...new Set(idProducts)];
    const newTodo = list.filter(
      (item: TCartState) => !Fitter.includes(item.id)
    );
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
    const { handle, item, itemId, quantity } = data;
    const list: Array<TCartState> = get(listCartState);

    switch (handle) {
      case "tang":
        const newTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? { ...itemDetail, quantity: Number(itemDetail.quantity) + 1 }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        break;
      case "giam":
        let reduceTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === item.id
            ? {
                ...itemDetail,
                quantity: Math.max(1, itemDetail.quantity - 1),
              }
            : itemDetail
        );
        set(listCartState, [...reduceTodo]);
        break;
      case "Change":
        let changeTodo = list.map((itemDetail: TCartState) =>
          itemDetail.id === Number(itemId)
            ? {
                ...itemDetail,
                quantity: quantity,
              }
            : itemDetail
        );
        set(listCartState, [...changeTodo]);
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
});
export const totalCartState = selector({
  key: "totalcart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listCartState);
    const listCartChoice = list.filter(
      (item: TCartState) => item.choice == true
    );
    const totalCart = listCartChoice.reduce(
      (total: number, item: TCartState) => {
        return total + item.priceProduct * item.quantity;
      },
      0
    );
    return totalCart;
  },
});
export const countChoiceCart = selector({
  key: "choicecart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listCartState);
    const listCartChoice = list.filter(
      (item: TCartState) => item.choice == true
    );
    return listCartChoice.length;
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
    const value = list.filter((item: TCartState) =>
      regex.test(item.titleProduct)
    );
    set(listSearchState, [...value]);
  },
});
export const handleChoiceProduct = selector({
  key: "handleChoiceProductCart",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listSearchState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const list: Array<TCartState> = get(listCartState);
    const value = list.map((item) => ({
      ...item,
      choice: data.includes(item.id),
    }));
    set(listCartState, [...value]);
  },
});
export const listCartChoiceProduct = selector({
  key: "listCartChoice",
  get: ({ get }) => {
    const list: Array<TCartState> = get(listCartState);
    const listCartChoice = list.filter(
      (item: TCartState) => item.choice == true
    );
    return listCartChoice;
  },
});
