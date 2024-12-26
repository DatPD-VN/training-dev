import { TListProductChange } from "../product/type";

type TDataProductProps = {
  lists: Array<TListProductChange>;
  isLoading: boolean;
  handleSetList: (newList: TListProductChange[]) => void;
};

export type { TDataProductProps };
