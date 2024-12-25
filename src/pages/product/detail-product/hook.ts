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

  /**
   * Handle Add Product When Click Cart Icon
   * @param item: TDataState
   *
   */
  const handleClick = (item: TDataState) => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    let quantity = qtt.value;
    let wrapItem = { ...item, quantity: quantity };
    addCart(wrapItem);
    Toast("success", "Thêm sản phẩm thành công");
  };

  /**
   * Handle Add Product
   * @param item: TDataState
   *
   */
  const handleAddProduct = (item: TDataState) => {
    let wrapItem = { ...item, quantity: 1 };
    addCart(wrapItem);
    Toast("success", "Thêm sản phẩm thành công");
  };

  /**
   * Function Increase Quantity
   *
   */
  const handlePlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    if (qtt.value == "999") {
      qtt.value = qtt.value;
    } else {
      qtt.value = (parseInt(qtt.value) + 1).toString();
    }
  };

  /**
   * Function Reduce Quantity
   *
   */
  const handleNoPlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    if (qtt.value == "1") {
      qtt.value = qtt.value;
    } else {
      qtt.value = (parseInt(qtt.value) - 1).toString();
    }
  };

  /**
   * Function Handle Change Quality
   *
   */
  const handleChangeQuality = () => {
    const quantity = document.querySelector("#textbox_id") as HTMLInputElement;
    quantity.addEventListener("keydown", (e) => {
      if (e.key === "+" || e.key === "-" || e.key === "." || e.key === "e") {
        e.preventDefault();
      }
    });
    if (parseInt(quantity.value) > 999) {
      quantity.value = "999";
    } else if (parseInt(quantity.value) < 1) {
      quantity.value = "1";
    }
  };

  return {
    isPhoneScreen,
    countCart,
    product,
    handleAddProduct,
    handleNoPlus,
    handlePlus,
    handleClick,
    handleChangeQuality,
  };
};
