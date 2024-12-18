import { useEffect } from "react";
import { TCategoriesProps } from "./type";
import { useListCategory, setAddCategory } from "../../recoil";
import { useNavigate, useLocation } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { TCategoryState } from "../../recoil/type";

export const useCategories = (): TCategoriesProps => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = Number(searchParams.get("CategoryId"));
  const list: Array<TCategoryState> = useListCategory();
  const choice = setAddCategory();
  const nameCategory: number = keyword ? keyword : -1;

  useEffect(() => {
    if (keyword) {
      choice(keyword);
    }
  }, []);

  // Function add Category
  const handleAddCategory = (item: TCategoryState) => {
    if (nameCategory !== item.categoryID) {
      choice(item.categoryID);
      navigate(
        Route(
          `${ROUTE_CONFIG.PRODUCT}/Category/?keyword=${item.categoryName}&CategoryId=${item.categoryID} `
        )
      );
    }
  };

  return {
    nameCategory,
    list,
    handleAddCategory,
  };
};
