import { TUseCartProps } from "./type";
import {
  useListCartState,
  useCountCartState,
  setDelCartState,
  useTotalCartState,
  setHandleCartState,
  setSearchCartState,
  useListSearchCartState,
  setDelAllCartState,
} from "../../recoil";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

export const useCart = (): TUseCartProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const cart: any = useListCartState();
  const listSearchCart = useListSearchCartState();
  const totalCart: number = useTotalCartState();
  const countCart: number = useCountCartState();
  const setSearchCart: any = setSearchCartState();
  const delCart = setDelCartState();
  const delCartAll = setDelAllCartState();
  const handleCart = setHandleCartState();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSelectId, setIsSelectId] = useState<any>([]);
  const listProduct = listSearchCart.length > 0 ? listSearchCart : cart;

  useEffect(() => {
    console.log(isSelectId);
  }, [isSelectId]);
  const handleDel = (id: number) => {
    delCart(id);
  };
  const handleDelAll = () => {
    delCartAll(isSelectId);
  };
  const handleCheck = (id: any) => {
    if (isSelectId.length > 0) {
      if (isSelectId.includes(id)) {
        const values = isSelectId.filter((item: Array<object>) => item !== id);
        setIsSelectId([...values]);
      } else {
        setIsSelectId([...isSelectId, id]);
      }
    } else {
      setIsSelectId([id]);
    }
  };
  const handleSearch = () => {
    const valueInput = inputRef.current;
    const value = valueInput?.value;
    setSearchCart(value);
  };
  const handleCheckAll = () => {
    const checkAll = listProduct.flatMap((item: any) => item.id);
    if (JSON.stringify(checkAll) === JSON.stringify(isSelectId)) {
      setIsSelectId([]);
    } else {
      setIsSelectId(checkAll);
    }
  };

  const handleCase = (handle: string, item: any) => {
    let handleDetail = { handle, item };
    handleCart(handleDetail);
  };

  return {
    isPhoneScreen,
    listProduct,
    listSearchCart,
    totalCart,
    countCart,
    handleDel,
    handleCase,
    handleSearch,
    inputRef,
    handleCheck,
    handleCheckAll,
    isSelectId,
    handleDelAll,
  };
};
