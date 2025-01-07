import { TCartState } from "../../recoil/type";

type TUseCartProps = {
  isPhoneScreen: boolean;
  listProduct: Array<TCartState>;
  totalCart: number;
  countCart: number;
  handleDel: (id: number) => void;
  handleDelAll: () => void;
  handleCheck: (id: number) => void;
  handleCase: (handle: string, item: TCartState) => void;
  handleSearch: () => void;
  handleCheckAll: () => void;
  handleChangeQuality: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  selectIds: Array<number>;
  handleAddCategory: (item: TCartState) => void;
  handleSubmit: () => void;
};

export type { TUseCartProps };
