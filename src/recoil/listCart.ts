import { atom, selector } from 'recoil';

const defaultData : Array<string> =  [];

const listCartState : any = atom({
    key: 'listCart',
    default: defaultData,
});


export const addCartState = selector({
    key: 'newCart',
    get: ({ get }) => {
        const list = get(listCartState);
        return list;
    },
    set: ({ get, set }, item : any) => {
        const { quanlity } = item;
        const list : any = get(listCartState);
        const check = list.find((itemlist:any) => itemlist.id === item.id)
        
        if (check) {
            if (quanlity === 1) {
                const newTodo = list.map((itemDetail: any) => itemDetail.id === item.id ? {...itemDetail , quanlity : parseInt(itemDetail.quanlity) + 1} : itemDetail  )
                set(listCartState, [...newTodo]);
                return
            } else {
                const newTodo = list.map((itemDetail: any) => itemDetail.id === item.id ? {...itemDetail , quanlity : parseInt(itemDetail.quanlity) + parseInt(quanlity)} : itemDetail  )
                set(listCartState, [...newTodo]);
                return
            }
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
        const list : any = get(listCartState);
        const newTodo = list.filter((item: any) => item.id !== id) ;
        set(listCartState, [ ...newTodo]);
    },
});

export const handleCartState = selector({
    key: 'handeCart',
    get: ({ get }) => {
        const list = get(listCartState);
        return list;
    },
    set: ({ get, set }, data : any) => {
        const {handle ,item} = data;
        const list : any = get(listCartState);

        switch (handle) {
            case 'tang':
                const newTodo = list.map((itemDetail: any) => itemDetail.id === item.id ? {...itemDetail , quanlity : parseInt(itemDetail.quanlity) + 1} : itemDetail  )
                set(listCartState, [...newTodo]);
              break;
            case 'giam':
                let neTodo =list.map((itemDetail: any) => itemDetail.id === item.id ? {...itemDetail , quanlity : Math.max(1,parseInt(itemDetail.quanlity) - 1)} : itemDetail  ) ;
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
        const list : any = get(listCartState);
        return list.length;
    },
    set: ({ get, set }, item) => {
        const list : any = get(listCartState);
        const newTodo = {
        item
        };
        set(listCartState, [...list, newTodo]);
    },
});
export const totalCartState = selector({
    key: 'totalcart',
    get: ({ get }) => {
        const list : any = get(listCartState);
        const totalCart = list.reduce((total :any,item : any) => {
            return total + item.priceProduct * item.quanlity;
        },0 )   
        return totalCart;
    },
    set: ({ get, set }, item) => {
        const list : any = get(listCartState);
        const newTodo = {
        item
        };

        set(listCartState, [...list, newTodo]);
        console.log(list)
    },
});
