import { TDataProductProps } from "./type";
import { useEffect, useState } from "react";
import { useNewListState, setDataProducts } from "../../recoil";
import { DELAY_DEFAULT } from "../../const";
import { TListProduct } from "../product/type";

export const useDataProducts = (): TDataProductProps => {
  const newList: Array<TListProduct> = useNewListState();
  const [isLoading, setIsLoading] = useState(true);
  const setListNew = setDataProducts();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, DELAY_DEFAULT);
  }, [newList]);

  const listProducts = newList.map((item, index) => ({
    ...item,
    displayOrder: index + 1,
  }));

  useEffect(() => {
    setLists(listProducts);
  }, [newList]);

  const [lists, setLists] = useState(listProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lists.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(lists.length / itemsPerPage);

  /**
   * Handle Set List Product
   * @param newLists: TListProduct[]
   *
   */
  const handleSetList = (newLists: TListProduct[]) => {
    const updateList = newLists.map((item, index) => ({
      ...item,
      displayOrder: index + 1,
    }));
    setListNew(updateList);
  };
  return {
    lists,
    isLoading,
    handleSetList,
    currentItems,
    paginate,
    totalPages,
    currentPage,
    itemsPerPage,
  };
};
