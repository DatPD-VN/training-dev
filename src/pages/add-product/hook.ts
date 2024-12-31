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

export const useAddProduct = (): TUseCartProps => {
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
      const value = cart.map((item) => ({
        ...item,
        idUser: profile.id,
      }));
      if (valueOld) {
        const valueNew = [...valueOld, ...value];
        localStorage.setItem("CartHistory", JSON.stringify(valueNew));
      } else {
        const valueNew = [...value];
        localStorage.setItem("CartHistory", JSON.stringify(valueNew));
      }
      handleDeleteAfterSubmit(cart);
      navigate(Route(ROUTE_CONFIG.PRODUCT));
      Toast("success", "Đặt hàng thành công!!!");
    } else {
      Toast("error", "Vui lòng chọn sản phẩm để đặt hàng");
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
