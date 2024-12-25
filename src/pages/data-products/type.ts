import { TCartState } from "../../recoil/type";
import { TListProduct, TListProductChange } from "../product/type";

type TDataProductProps = {
  lists: Array<TListProductChange>;
  isLoading: boolean;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    product: TListProduct
  ) => void;
  handleSetList: (newList: TListProductChange[]) => void;
};

export type { TDataProductProps };
