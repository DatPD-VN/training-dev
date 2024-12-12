import { TCategoryState } from "../../recoil/type";

type TCategoriesProps = {
  nameCategory : string;
  list: Array<TCategoryState>;
  handleAddCategory: (item: TCategoryState) => void;
};

export type { TCategoriesProps };
