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
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";

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
  const navigate = useNavigate();

  /**
   * Delete Product by ID
   * @param id: number
   *
   */
  const handleDel = (id: number) => {
    delCart(id);
  };

  /**
   * Delete Products All
   *
   */
  const handleDelAll = () => {
    delCartAll(isSelectId);
  };
  /**
   * Handle Select Product
   * @param id: number
   *
   */
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

  /**
   * Handle Search Products
   *
   */
  const handleSearch = () => {
    const valueInput = inputRef.current;
    const value = valueInput?.value;
    setSearchCart(value);
  };

  /**
   * Handle Select Product All
   *
   */
  const handleCheckAll = () => {
    const checkAll = listProduct.flatMap((item: TCartState) => item.id);
    if (JSON.stringify(checkAll) === JSON.stringify(isSelectId)) {
      setIsSelectIds([]);
    } else {
      setIsSelectIds(checkAll);
    }
  };

  /**
   * Handle Increase or Reduce Quantity of Product
   * @param handle: string @param item: TCartState
   *
   */
  const handleCase = (handle: string, item: TCartState) => {
    if (item.quantity >= 999) {
      item.quantity = 999;
    } else if (item.quantity < 1) {
      item.quantity = 1;
    }
    let handleDetail = { handle, item };
    handleCart(handleDetail);
  };

  /**
   * Function Handle Change Quality
   * @param event: React.ChangeEvent<HTMLInputElement>
   *
   */
  const handleChangeQuality = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantitys = document.querySelectorAll(
      ".textbox_id"
    ) as NodeListOf<HTMLDivElement>;
    quantitys.forEach((quantity) => {
      quantity.addEventListener("keydown", (e) => {
        if (e.key === "+" || e.key === "-" || e.key === "." || e.key === "e") {
          e.preventDefault();
        }
      });
    });

    if (parseInt(event.target.value) > 999) {
      event.target.value = "999";
    } else if (parseInt(event.target.value) < 1) {
      event.target.value = "1";
    }
    let handleDetail = {
      handle: "Change",
      itemId: event.target.id,
      quantity: event.target.value,
    };
    handleCart(handleDetail);
  };

  /**
   * Function add Category
   * @param item: TCartState
   *
   */
  const handleAddCategory = (item: TCartState) => {
    navigate(
      Route(
        `${ROUTE_CONFIG.PRODUCT}/Category?keyword=${item.categoryName}&CategoryId=${item.categoryID}`
      )
    );
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
    handleChangeQuality,
    handleAddCategory,
  };
};
