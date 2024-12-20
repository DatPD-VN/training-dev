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
import { useRef, useState } from "react";
import { TCartState } from "../../recoil/type";

export const useCart = (): TUseCartProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const cart: Array<TCartState> = useListCartState();
  const listSearchCart: Array<TCartState> = useListSearchCartState();
  const totalCart: number = useTotalCartState();
  const countCart: number = useCountCartState();
  const setSearchCart = setSearchCartState();
  const delCart = setDelCartState();
  const delCartAll = setDelAllCartState();
  const handleCart = setHandleCartState();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSelectId, setIsSelectIds] = useState<number[]>([]);
  const listProduct = listSearchCart.length > 0 ? listSearchCart : cart;

  // Delete Product by ID
  const handleDel = (id: number) => {
    delCart(id);
  };

  // Delete Products All
  const handleDelAll = () => {
    delCartAll(isSelectId);
  };
  // Handle Select Product
  const handleCheck = (id: number) => {
    if (isSelectId.length > 0) {
      if (isSelectId.includes(id)) {
        const values = isSelectId.filter((item: number) => item !== id);
        setIsSelectIds([...values]);
      } else {
        setIsSelectIds([...isSelectId, id]);
      }
    } else {
      setIsSelectIds([id]);
    }
  };

  // Handle Search Products
  const handleSearch = () => {
    const valueInput = inputRef.current;
    const value = valueInput?.value;
    setSearchCart(value);
  };

  // Handle Select Product All
  const handleCheckAll = () => {
    const checkAll = listProduct.flatMap((item: TCartState) => item.id);
    if (JSON.stringify(checkAll) === JSON.stringify(isSelectId)) {
      setIsSelectIds([]);
    } else {
      setIsSelectIds(checkAll);
    }
  };

  // Handle Increase or Reduce Quantity of Product
  const handleCase = (handle: string, item: TCartState) => {
    let handleDetail = { handle, item };
    handleCart(handleDetail);
  };

  return {
    isPhoneScreen,
    listProduct,
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
