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
        const check = list.find(itemlist => itemlist.id === item.id)
        
        if (check) {
            const newTodo = list.map(itemDetail => itemDetail.id === item.id ? {...itemDetail , quanlity : itemDetail.quanlity + 1} : itemDetail  )
            set(listCartState, [...newTodo]);
            return
        } else {
            const newTodo =item ;
            set(listCartState, [...list, newTodo]);
        }

        
    },
});
export const delCartState = selector({
    key: 'delCart',
    get: ({ get }) => {
        const list = get(listCartState);
        return list;
    },
    set: ({ get, set }, id) => {
        const list = get(listCartState);
        const newTodo = list.filter(item => item.id !== id) ;
        set(listCartState, [ ...newTodo]);
    },
});

export const handleCartState = selector({
    key: 'handeCart',
    get: ({ get }) => {
        const list = get(listCartState);
        return list;
    },
    set: ({ get, set }, data) => {
        const {handle ,item} = data;
        const list = get(listCartState);

        switch (handle) {
            case 'tang':
                const newTodo = list.map(itemDetail => itemDetail.id === item.id ? {...itemDetail , quanlity : itemDetail.quanlity + 1} : itemDetail  )
                set(listCartState, [...newTodo]);
              break;
            case 'giam':
                let neTodo =list.map(itemDetail => itemDetail.id === item.id ? {...itemDetail , quanlity : Math.max(1,itemDetail.quanlity - 1)} : itemDetail  ) ;
                set(listCartState, [...neTodo]);
              break;
            default:
              console.log(`Sorry, we are out of.`);
          }
          
    },
});


export const countCartState = selector({
    key: 'countCart',
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
    },
});
export const totalCartState = selector({
    key: 'totalcart',
    get: ({ get }) => {
        const list = get(listCartState);
        const totalCart = list.reduce((total,item) => {
            return total + item.priceProduct * item.quanlity;
        },0 )
        return totalCart;
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
