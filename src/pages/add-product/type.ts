import React from "react";
import { TCategoryState } from "../../recoil/type";

type TAddProductProps = {
  listCategories: TCategoryState[];
  isImages: boolean;
  setIsImages: React.Dispatch<React.SetStateAction<boolean>>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCategory: (value: number | string, id: string) => void;
  productData: TProductData;
};

type TProductData = {
  titleProduct: string;
  priceProduct: string;
  imgProduct: string | ArrayBuffer | null;
  categoryName: string;
  hashTag: string;
  stockProduct: number;
};
export type { TAddProductProps, TProductData };
