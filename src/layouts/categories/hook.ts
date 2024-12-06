import { useEffect } from "react";
import { TCategoriesProps } from "./type";
import { useListCategory, setListCategory, setAddCategory } from "../../recoil";

export const UseCategories = (): TCategoriesProps => {
  const list: Array<string> = useListCategory();
  const setlist: any = setListCategory();
  const choise: any = setAddCategory();

  useEffect(() => {
    setlist();
  }, []);
  const handleAddCategory = (item: any) => {
    choise(item);
  };

  return {
    list,
    handleAddCategory,
  };
};
