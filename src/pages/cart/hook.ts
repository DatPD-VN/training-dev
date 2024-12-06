import { TUseCartProps } from "./type";
import {
  useListCartState,
  useCountCartState,
  setDelCartState,
  useTotalCartState,
  setHandleCartState,
} from "../../recoil";
import { useMediaQuery } from "react-responsive";

export const UseCart = (): TUseCartProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const cart: any = useListCartState();
  const totalCart: any = useTotalCartState();
  const countCart: any = useCountCartState();
  const delCart = setDelCartState();
  const handleCart = setHandleCartState();
  const hadleDel = (id: any) => {
    delCart(id);
  };

  const hadleCase = (handle: any, item: any) => {
    let handleDetail = { handle, item };
    handleCart(handleDetail);
  };

  return {
    isPhoneScreen,
    cart,
    totalCart,
    countCart,
    hadleDel,
    hadleCase,
  };
};
