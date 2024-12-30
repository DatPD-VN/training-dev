import { TOrderProductProps } from "./type";
import { useEffect, useState } from "react";
import { DELAY_DEFAULT } from "../../const";

export const useHistoryOrder = (): TOrderProductProps => {
  const newList = JSON.parse(localStorage.getItem("CartHistory") as string);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, DELAY_DEFAULT);
  }, [newList]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newList?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(newList?.length / itemsPerPage);

  return {
    newList,
    isLoading,
    currentItems,
    paginate,
    totalPages,
    currentPage,
    itemsPerPage,
  };
};
