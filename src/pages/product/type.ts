type TUseProductProps = {
  listProduct: Array<TListProduct>;
  isLoading: boolean;
};
type TListProduct = {
  id: number;
  imgProduct: string;
  titleProduct: string;
  priceProduct: number;
  saleProduct: string;
  shipProduct: boolean;
  isVoucher: boolean;
  voucherProduct: string;
  hashTag: Array<string>;
  categoryName: string;
  categoryID: number;
};

export type { TUseProductProps,TListProduct };
