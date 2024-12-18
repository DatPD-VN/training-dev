import { TCategoryState } from "../../recoil/type";

type TCategoriesProps = {
  nameCategory : number;
  list: Array<TCategoryState>;
  handleAddCategory: (item: TCategoryState) => void;
};

export type { TCategoriesProps };
