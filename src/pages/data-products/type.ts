import { TListProductChange } from "../product/type";

type TDataProductProps = {
  lists: Array<TListProductChange>;
  isLoading: boolean;
  handleSetList: (newList: TListProductChange[]) => void;
  currentItems: Array<TListProductChange>;
  paginate: (pageNumber: number) => void;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export type { TDataProductProps };
