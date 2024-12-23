import { useEffect, useState } from "react";
import { TCategoriesProps } from "./type";
import {
  useListCategory,
  setAddCategory,
  setAddDetailCategory,
} from "../../recoil";
import { useNavigate, useLocation } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { TCategoryState, TCategoryList } from "../../recoil/type";

export const useCategories = (): TCategoriesProps => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = Number(searchParams.get("CategoryId"));
  const detailCategory = String(searchParams.get("CategoryDetailName"));
  const categoryDetail = Number(searchParams.get("CategoryDetailID"));
  const list: Array<TCategoryState> = useListCategory();
  const choice = setAddCategory();
  const choiceDetail = setAddDetailCategory();
  const nameCategory: number = keyword ? keyword : -1;
  const detailCategoryID: string = detailCategory ? detailCategory : "";
  const categoryDetailID: number = categoryDetail ? categoryDetail : -1;
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  useEffect(() => {
    if (keyword && detailCategory !== "null") {
      const data = { categoryID: keyword, itemDetailID: categoryDetailID };
      choiceDetail(data);
    } else if (keyword && detailCategory == "null") {
      choice(keyword);
    }
  }, []);

  /**
   * Function add Category
   * @param item
   *
   */
  const handleAddCategory = (item: TCategoryState) => {
    if (
      (nameCategory !== item.categoryID && categoryDetailID == -1) ||
      (nameCategory == item.categoryID && categoryDetailID !== -1) ||
      (nameCategory !== item.categoryID && categoryDetailID !== -1)
    ) {
      choice(item.categoryID);
      navigate(
        Route(
          `${ROUTE_CONFIG.PRODUCT}/Category?keyword=${item.categoryName}&CategoryId=${item.categoryID}`
        )
      );
    }
  };

  /**
   * Function add DetailCategory
   * @param item
   *
   */
  const handleAddDetailCategory = (
    item: TCategoryState,
    itemDetail: TCategoryList
  ) => {
    if (detailCategoryID !== itemDetail.categoryDetailName) {
      const categoryID = item.categoryID;
      const itemDetailID = itemDetail.categoryDetailID;
      const data = { categoryID, itemDetailID };
      choiceDetail(data);
      navigate(
        Route(
          `${ROUTE_CONFIG.PRODUCT}/Category?keyword=${item.categoryName}&CategoryId=${item.categoryID}&CategoryDetailName=${itemDetail.categoryDetailName}&CategoryDetailID=${itemDetail.categoryDetailID}`
        )
      );
    }
  };

  return {
    nameCategory,
    list,
    handleAddCategory,
    openCategory,
    setOpenCategory,
    handleAddDetailCategory,
    detailCategoryID,
    visibleCount,
    setVisibleCount,
  };
};
