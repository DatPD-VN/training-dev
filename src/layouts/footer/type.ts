import { TCategoryState } from "../../recoil/type";

type TCategoriesProps = {
  list : Array<string>,
  handleAddCategory : (item: TCategoryState) => void
};



export type { TCategoriesProps };
