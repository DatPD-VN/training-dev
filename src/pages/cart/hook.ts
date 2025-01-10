import { TUseCartProps } from "./type";
import {
  useListCartState,
  setDelCartState,
  useTotalCartState,
  setHandleCartState,
  setSearchCartState,
  useListSearchCartState,
  setDelAllCartState,
  useCountChoiceCartState,
  setHandleChoiceProductState,
} from "../../recoil";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { TCartState } from "../../recoil/type";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { Toast } from "../../Common/toast";

export const useCart = (): TUseCartProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const cart: Array<TCartState> = useListCartState();
  const listSearchCart: Array<TCartState> = useListSearchCartState();
  const totalCart: number = useTotalCartState();
  const countCart: number = useCountChoiceCartState();
  const setSearchCart = setSearchCartState();
  const delCart = setDelCartState();
  const delCartAll = setDelAllCartState();
  const handleCart = setHandleCartState();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectIds, setSelectIds] = useState<number[]>([]);
  const listProduct = listSearchCart.length > 0 ? listSearchCart : cart;
  const navigate = useNavigate();
  const handleChoiProduct = setHandleChoiceProductState();

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
    delCartAll(selectIds);
  };
  /**
   * Handle Select Product
   * @param id: number
   *
   */
  const handleCheck = (id: number) => {
    if (selectIds.length > 0) {
      if (selectIds.includes(id)) {
        const values = selectIds.filter((item: number) => item !== id);
        setSelectIds([...values]);
      } else {
        setSelectIds([...selectIds, id]);
      }
    } else {
      setSelectIds([id]);
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
    if (JSON.stringify(checkAll) === JSON.stringify(selectIds)) {
      setSelectIds([]);
    } else {
      setSelectIds(checkAll);
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

  /**
   * Function Submit
   *
   */
  const handleSubmit = () => {
    if (countCart > 0) {
      navigate(Route(ROUTE_CONFIG.ORDER));
    } else {
      Toast("error", "Vui lòng chọn sản phẩm để mua hàng");
    }
  };

  useEffect(() => {
    handleChoiProduct(selectIds);
  }, [selectIds]);

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
    selectIds,
    handleDelAll,
    handleChangeQuality,
    handleAddCategory,
    handleSubmit,
  };
};
