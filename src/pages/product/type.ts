import React from "react";
import { TDataState } from "../../recoil/type";

type TUseProductProps = {
  lists: Array<TDataState>;
  isLoading: boolean;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    product: TDataState
  ) => void;
  handleSetList: (newList: TDataState[]) => void;
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
  quantity?: number;
  idUser?: number;
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
