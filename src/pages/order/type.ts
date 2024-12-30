import { TCartState } from "../../recoil/type";

type TUseCartProps = {
  isPhoneScreen: boolean;
  totalCart: number;
  countCart: number;
  cart: TCartState[];
  handleSubmit: () => void;
};

export type { TUseCartProps };
