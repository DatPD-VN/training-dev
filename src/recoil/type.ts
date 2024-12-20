type TCategoryState = {
  categoryID: number;
  categoryName: string;
};
type TImageState = {
  src: string;
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
  categoryName: string;
  categoryID: number;
};
type TCartState = {
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
  quantity: number;
};




export type { TCategoryState, TDataState, TImageState, TCartState };
