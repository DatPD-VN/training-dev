import { TCategoryList, TCategoryState } from "../../recoil/type";

type TCategoriesProps = {
  nameCategory: number;
  detailCategoryID: string;
  list: Array<TCategoryState>;
  handleAddCategory: (item: TCategoryState) => void;
  handleAddDetailCategory: (
    item: TCategoryState,
    itemDetail: TCategoryList
  ) => void;
  openCategory: boolean;
  setOpenCategory: React.Dispatch<React.SetStateAction<boolean>>;
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
};

export type { TCategoriesProps };
