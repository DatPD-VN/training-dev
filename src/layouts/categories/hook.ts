import { useEffect } from "react";
import { TCategoriesProps } from "./type";
import { useListCategory, setListCategory, setAddCategory } from "../../recoil";
import { useNavigate, useParams } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";

export const useCategories = (): TCategoriesProps => {
  const navigate = useNavigate();
  const list: Array<string> = useListCategory();
  const setlist: any = setListCategory();
  const choice: any = setAddCategory();
  let { id } = useParams();
  const nameCategory : string = id ? id : ""
  useEffect(() => {
    setlist();
    if (id) {
      choice(id);
    } 
  }, []);
  const handleAddCategory = (item: any) => {
    choice(item.categoryID);
    navigate(Route(`${ROUTE_CONFIG.PRODUCT}/Category/?keyword=${item.categoryName} `));
  };

  return {
    nameCategory,
    list,
    handleAddCategory,
  };
};
