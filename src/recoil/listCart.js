import { atom, selector } from 'recoil';

const defaultData =  [];

const listCartState = atom({
    key: 'listCart',
    default: defaultData,
});


export const addCartState = selector({
    key: 'newCart',
    get: ({ get }) => {
        const list = get(listCartState);
        return list;
    },
    set: ({ get, set }, item) => {
        const list = get(listCartState);
        const newTodo = {
        item
        };

        set(listCartState, [...list, newTodo]);
        console.log(list)
    },
});

export const countCartState = selector({
    key: 'newCart',
    get: ({ get }) => {
        const list = get(listCartState);
        return list.length;
    },
    set: ({ get, set }, item) => {
        const list = get(listCartState);
        const newTodo = {
        item
        };

        set(listCartState, [...list, newTodo]);
        console.log(list)
    },
});
