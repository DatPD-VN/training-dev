import { useEffect } from "react";
import { TCategoriesProps } from "./type";
import { useListCategory, setListCategory, setAddCategory } from "../../recoil";
import { useNavigate, useLocation } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";

export const useCategories = (): TCategoriesProps => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  const list: Array<object> = useListCategory();
  const setlist: any = setListCategory();
  const choice: any = setAddCategory();
  const nameCategory: string = keyword ? keyword : "";
  useEffect(() => {
    setlist();
    if (keyword) {
      choice(keyword);
    }
  }, []);
  const handleAddCategory = (item: any) => {
    choice(item.categoryID);
    navigate(
      Route(`${ROUTE_CONFIG.PRODUCT}/Category/?keyword=${item.categoryName} `)
    );
  };

  return {
    nameCategory,
    list,
    handleAddCategory,
  };
};
