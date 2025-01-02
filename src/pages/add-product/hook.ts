import { TAddProductProps, TProductData } from "./type";
import { useListCategory } from "../../recoil";
import { TCategoryState } from "../../recoil/type";
import { Toast } from "../../Common/toast";
import { useState } from "react";
import { validationFileUpload } from "../../Common/validation-upload-file";

export const useAddProduct = (): TAddProductProps => {
  const listCategories: TCategoryState[] = useListCategory();
  const [isImages, setIsImages] = useState(false);
  const [productData, setProductData] = useState<TProductData>({
    imgProduct: "",
    titleProduct: "",
    priceProduct: "",
    categoryName: "",
    hashTag: "",
    stockProduct: "",
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    if (file) {
      const validation = validationFileUpload(event);
      if (validation?.isValid) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProductData((prevData) => ({
            ...prevData,
            imgProduct: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
        Toast("success", validation?.message);
      } else {
        if (validation?.message) {
          Toast("error", validation?.message);
        }
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategory = (value: number | string, id: string) => {
    setProductData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!productData.titleProduct) errors.push("Vui lòng nhập tên sản phẩm .");
    if (!productData.imgProduct) errors.push("Vui lòng nhập ảnh.");
    if (!productData.priceProduct) errors.push("Vui lòng nhập giá sản phẩm.");
    if (!productData.categoryName) errors.push("Vui lòng chọn thể loại.");
    if (!productData.hashTag) errors.push("Vui lòng nhập hash tag.");
    if (!productData.stockProduct)
      errors.push("Vui lòng nhập số lượng sản phẩm.");

    return errors;
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => Toast("error", error));
      return;
    }
    const valueOld = JSON.parse(localStorage.getItem("Data") as string);
    const resultData = {
      id: valueOld.length + 1,
      ...productData,
    };
    const value = [resultData, ...valueOld];
    localStorage.setItem("Data", JSON.stringify(value));
    setProductData({
      titleProduct: "",
      imgProduct: "",
      priceProduct: "",
      categoryName: "",
      hashTag: "",
      stockProduct: "",
    });
    const inputFile = document.querySelector("#inputFile") as HTMLInputElement;
    const inputImage = document.querySelector(
      "#inputImage"
    ) as HTMLInputElement;
    if (inputFile) {
      inputFile.value = "";
    }
    if (inputImage) {
      inputImage.value = "";
    }
    Toast("success", "Thêm sản phẩm thành công");
  };

  return {
    listCategories,
    isImages,
    setIsImages,
    handleImageChange,
    handleChange,
    handleSubmit,
    handleCategory,
    productData,
  };
};
