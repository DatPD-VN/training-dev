import { atom, selector } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

const defaultData: Array<string> = [];

const listCartState: any = atom({
  key: "listCart",
  default: defaultData,
});
const searchData: Array<string> = [];

const listSearchState: any = atom({
  key: "listCartSearch",
  default: searchData,
});

export const addCartState = selector({
  key: "newCart",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, item: any) => {
    const { quanlity } = item;
    const list: any = get(listCartState);
    const check = list.find((itemlist:any) => itemlist.id === item.id);

    if (check) {
      if (quanlity === 1) {
        const newTodo = list.map((itemDetail: any) =>
          itemDetail.id === item.id
            ? { ...itemDetail, quanlity: parseInt(itemDetail.quanlity) + 1 }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        return;
      } else {
        const newTodo = list.map((itemDetail: any) =>
          itemDetail.id === item.id
            ? {
                ...itemDetail,
                quanlity: parseInt(itemDetail.quanlity) + parseInt(quanlity),
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
  }
});
export const delCartState = selector({
  key: "delCart",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, id) => {
    const list: any = get(listCartState);
    const newTodo = list.filter((item: any) => item.id !== id);
    set(listCartState, [...newTodo]);
  },
});
export const delCartStateAll = selector({
  key: "delCartAll",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, id : any) => {
    const list: Array<object> = get(listCartState);
    const newTodo = list.filter((item: any) => !id.includes(item.id));
    set(listCartState, [...newTodo]);
  },
});

export const handleCartState = selector({
  key: "handeCart",
  get: ({ get }) => {
    const list = get(listCartState);
    return list;
  },
  set: ({ get, set }, data: any) => {
    const { handle, item } = data;
    const list: any = get(listCartState);

    switch (handle) {
      case "tang":
        const newTodo = list.map((itemDetail: any) =>
          itemDetail.id === item.id
            ? { ...itemDetail, quanlity: parseInt(itemDetail.quanlity) + 1 }
            : itemDetail
        );
        set(listCartState, [...newTodo]);
        break;
      case "giam":
        let neTodo = list.map((itemDetail: any) =>
          itemDetail.id === item.id
            ? {
                ...itemDetail,
                quanlity: Math.max(1, parseInt(itemDetail.quanlity) - 1),
              }
            : itemDetail
        );
        set(listCartState, [...neTodo]);
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
  },
});

export const countCartState = selector({
  key: "countCart",
  get: ({ get }) => {
    const list: any = get(listCartState);
    return list.length;
  },
  set: ({ get, set }, item) => {
    const list: any = get(listCartState);
    const newTodo = {
      item,
    };
    set(listCartState, [...list, newTodo]);
  },
});
export const totalCartState = selector({
  key: "totalcart",
  get: ({ get }) => {
    const list: any = get(listCartState);
    const totalCart = list.reduce((total: any, item: any) => {
      return total + item.priceProduct * item.quanlity;
    }, 0);
    return totalCart;
  },
  set: ({ get, set }, item) => {
    const list: any = get(listCartState);
    const newTodo = {
      item,
    };

    set(listCartState, [...list, newTodo]);
    console.log(list);
  },
});
export const searchCartState = selector({
  key: "searchcart",
  get: ({ get }) => {
    const list: Array<string> = get(listSearchState);
    return list;
  },
  set: ({ get, set }, data : any) => {
    const list: Array<string> = get(listCartState);   
    const regex = new RegExp(data, "i");
    const value = list.filter(
      (item: any) => regex.test(item.titleProduct) 
    );
    set(listSearchState, [...value]);
  },
});

// Use
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

// Set
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
