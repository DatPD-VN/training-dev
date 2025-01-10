import { TUseCartProps } from "./type";
import {
  useCountCartState,
  useTotalCartState,
  useListCartChoiceProduct,
  setHandleDelCartAfterSubmit,
} from "../../recoil";
import { useMediaQuery } from "react-responsive";
import { TCartState } from "../../recoil/type";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { Toast } from "../../Common/toast";
import { v4 as uuidv4 } from "uuid";
import {
  MESSAGE_ERROR_ORDER_PRODUCT,
  MESSAGE_SUCCESS_ORDER_PRODUCT,
} from "../../const";

export const useOrder = (): TUseCartProps => {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const cart: Array<TCartState> = useListCartChoiceProduct();
  const totalCart: number = useTotalCartState();
  const countCart: number = useCountCartState();
  const navigate = useNavigate();
  const handleDeleteAfterSubmit = setHandleDelCartAfterSubmit();

  /**
   * Function Submit
   *
   */
  const handleSubmit = () => {
    if (cart.length > 0) {
      const profile = JSON.parse(localStorage.getItem("profileData") as string);
      const valueOld = JSON.parse(
        localStorage.getItem("CartHistory") as string
      );
      const value = cart.map((item) => {
        return {
          ...item,
          idUser: profile.id,
          idOrder: uuidv4(),
        };
      });
      if (valueOld) {
        const valueNew = [...valueOld, ...value];
        localStorage.setItem("CartHistory", JSON.stringify(valueNew));
      } else {
        const valueNew = [...value];
        localStorage.setItem("CartHistory", JSON.stringify(valueNew));
      }
      handleDeleteAfterSubmit(cart);
      navigate(Route(ROUTE_CONFIG.PRODUCT));
      Toast("success", MESSAGE_SUCCESS_ORDER_PRODUCT);
    } else {
      Toast("error", MESSAGE_ERROR_ORDER_PRODUCT);
    }
  };

  return {
    cart,
    isPhoneScreen,
    totalCart,
    countCart,
    handleSubmit,
  };
};
