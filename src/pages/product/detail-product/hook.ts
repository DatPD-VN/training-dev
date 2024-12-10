import { TUseDetailProductProps } from "./type";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router";
import { Toast } from "../../../Common";
import {
  useNewListState,
  setListCartState,
  useCountCartState,
} from "../../../recoil";

export const useDetailProduct = (): TUseDetailProductProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const location = useLocation();
  const newList: Array<object> = useNewListState();
  const addCart = setListCartState();
  const { id } = location.state;
  const product = newList.filter((item: any) => item.id === id);
  const countCart: any = useCountCartState();

  const handleClick = (item: any) => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    let quantity = qtt.value;
    let wrapItem = { ...item, quantity: quantity };
    addCart(wrapItem);
    Toast();
  };

  const handleAdd = (item: any) => {
    let wrapItem = { ...item, quantity: 1 };
    addCart(wrapItem);
    Toast();
  };

  /**
   *
   */
  const handlePlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    qtt.value = (parseInt(qtt.value) + 1).toString();
  };

  const handleNoPlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    qtt.value = (parseInt(qtt.value) - 1).toString();
  };

  return {
    isPhoneScreen,
    countCart,
    product,
    handleAdd,
    handleNoPlus,
    handlePlus,
    handleClick,
  };
};
