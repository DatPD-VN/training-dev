import React from "react";

type TUseProductProps = {
  lists: Array<TListProductChange>;
  isLoading: boolean;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    product: TListProduct
  ) => void;
  handleSetList: (newList: TListProductChange[]) => void;
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
type TListProductChange = {
  displayOrder: number;
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

export type { TUseProductProps, TListProduct, TListProductChange };
