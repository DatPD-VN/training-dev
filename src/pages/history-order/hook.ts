import { TOrderProductProps } from "./type";
import { useEffect, useState } from "react";
import { TProfileData } from "../profile/types";

export const useHistoryOrder = (): TOrderProductProps => {
  const [list, setList] = useState(() => {
    const newList = JSON.parse(localStorage.getItem("CartHistory") as string);
    return newList ? newList : null;
  });
  const user = JSON.parse(localStorage.getItem("profileData") as string);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (user.type == "admin") return true;
    return false;
  });

  /**
   * Handle Check Type Account
   *
   */
  const handleCheckType = () => {
    if (user) {
      const value = user.type;
      if (value == "admin") setIsAdmin(true);
    }
  };
  useEffect(() => {
    handleCheckType();
    if (!isAdmin) {
      const result = list.filter(
        (item: TProfileData) => item.idUser == user.id
      );
      setList(result);
    }
  }, [isAdmin]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(list?.length / itemsPerPage);

  return {
    list,
    currentItems,
    paginate,
    totalPages,
    currentPage,
    itemsPerPage,
  };
};
