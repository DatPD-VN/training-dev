import { TUseDetailProductProps } from "./type";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router";
import {
  useNewListState,
  setListCartState,
  useCountCartState,
} from "../../../recoil";
import { TDataState } from "../../../recoil/type";
import { Toast } from "../../../Common/toast";

export const useDetailProduct = (): TUseDetailProductProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const location = useLocation();
  const newList: Array<TDataState> = useNewListState();
  const addCart = setListCartState();
  const { id } = location.state;
  const product = newList.filter((item: TDataState) => item.id === id);
  const countCart: number = useCountCartState();

  // Handle Add Product When Click Cart Icon
  const handleClick = (item: TDataState) => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    let quantity = qtt.value;
    let wrapItem = { ...item, quantity: quantity };
    addCart(wrapItem);
    Toast("success", "Thêm sản phẩm thành công");
  };

  // Handle Add Product
  const handleAddProduct = (item: TDataState) => {
    let wrapItem = { ...item, quantity: 1 };
    addCart(wrapItem);
    Toast("success", "Thêm sản phẩm thành công");
  };

  // Function Increase Quantity
  const handlePlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    qtt.value = (parseInt(qtt.value) + 1).toString();
  };

  // Function Reduce Quantity
  const handleNoPlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    qtt.value = (parseInt(qtt.value) - 1).toString();
  };

  return {
    isPhoneScreen,
    countCart,
    product,
    handleAddProduct,
    handleNoPlus,
    handlePlus,
    handleClick,
  };
};
