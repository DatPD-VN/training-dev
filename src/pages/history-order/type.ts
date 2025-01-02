import { TListProductChange } from "../product/type";

type TOrderProductProps = {
  list: Array<TListProductChange>;
  currentItems: Array<TListProductChange>;
  paginate: (pageNumber: number) => void;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export type { TOrderProductProps };
