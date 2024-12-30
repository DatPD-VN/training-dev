import { TListProductChange } from "../product/type";

type TOrderProductProps = {
  newList: Array<TListProductChange>;
  isLoading: boolean;
  currentItems: Array<TListProductChange>;
  paginate: (pageNumber: number) => void;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export type { TOrderProductProps };
