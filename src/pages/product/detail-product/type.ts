import { TDataState } from "../../../recoil/type";

type TUseDetailProductProps = {
  isPhoneScreen: boolean;
  countCart: number;
  product: Array<TDataState>;
  handleAddProduct: (item: TDataState) => void;
  handleNoPlus: () => void;
  handlePlus: () => void;
  handleChangeQuality: () => void;
  handleClick: (item: TDataState) => void;
};

export type { TUseDetailProductProps };
