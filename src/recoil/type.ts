type TCategoryState = {
  categoryID: number;
  categoryName: string;
};
type TDataState = {
  id: number;
  imgProduct: string;
  titleProduct: string;
  priceProduct: number;
  saleProduct: string;
  shipProduct: boolean;
  isVoucher: boolean;
  voucherProduct: string;
  hashTag: Array<string>;
  categories: string;
  categoryID: number;
};

export type { TCategoryState, TDataState };
