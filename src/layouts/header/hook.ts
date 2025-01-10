import { THeaderProps } from "./type";
import {
  useCountCartState,
  useListSuggest,
  setListSearch,
  setListSuggest,
  setDelCategory,
  useListCategory,
  setAddCategory,
  setListCartState,
} from "../../recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { TCategoryState } from "../../recoil/type";
import { TListProduct } from "../../pages/product/type";
import { Toast } from "../../Common/toast";

export const useHeader = (): THeaderProps => {
  const navigate = useNavigate();
  const countCart: number = useCountCartState();
  const listHashtag: Array<string> = useListSuggest();
  const choice = setListSearch();
  const handleSearch = setListSuggest();
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const hashtag = location.state;
  const tag = hashtag !== null ? hashtag.hashtag : null;
  const delData: any = setDelCategory();
  const user: string = localStorage.getItem("profileData") as string;
  const userName = JSON.parse(user)?.email;
  const userImage = JSON.parse(user)?.image;
  const list: Array<TCategoryState> = useListCategory();
  const choiceCategory = setAddCategory();
  const searchParams = new URLSearchParams(location.search);
  const keyword = Number(searchParams.get("CategoryId"));
  const nameCategory: number = keyword ? keyword : -1;
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const addCart = setListCartState();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  /**
   * Handle Check Type Account
   *
   */
  const handleCheckType = () => {
    const result = localStorage.getItem("profileData");
    if (result) {
      const value = JSON.parse(result).type;
      if (value == "admin") setIsAdmin(true);
    }
  };

  /**
   * Handle Drop Product
   * @param event: React.DragEvent<HTMLDivElement>
   *
   */
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const productData = event.dataTransfer.getData("product");
    if (productData) {
      const product = JSON.parse(productData);
      handleAddProduct(product);
    }
  };

  /**
   * Handle Drag Over
   * @param event: React.DragEvent<HTMLDivElement>
   *
   */
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  /**
   * Handle Add Product
   * @param item: TListProduct
   *
   */
  const handleAddProduct = (item: TListProduct) => {
    let wrapItem = { ...item, quantity: 1 };
    addCart(wrapItem);
    Toast("success", "Thêm sản phẩm thành công");
  };

  /**
   * Handle Open Nav Search
   *
   */
  const handleOpen = () => {
    setIsDisabled(false);
  };

  /**
   * Handle Set Input Data When Search Change
   * @param item: string
   *
   */
  const handleChangeSearch = (item: string) => {
    const valueInput = searchRef.current;
    const value = valueInput?.value;
    if (value !== undefined && value !== "") {
      setIsSearch(true);
      handleSearch(item);
    } else {
      setIsSearch(false);
      handleSearch(item);
    }
  };

  /**
   * Handle Set Input Data When Click Search
   * @param item
   *
   */
  const inputSearch = () => {
    const valueInput = searchRef.current;
    const value = valueInput?.value;
    if (value !== undefined && value !== "") {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
    choice(value);
    navigate(Route(`${ROUTE_CONFIG.PRODUCT}/${value} `), {
      state: {
        hashtag: value,
      },
    });
  };

  /**
   * Delete value Input and Navigate
   * @param item
   *
   */
  const handleNav = () => {
    ((document.querySelector("#inputSearch") as HTMLInputElement).value = ""),
      delData();
    navigate(Route(ROUTE_CONFIG.PRODUCT));
  };

  /**
   * Handle LogOut
   * @param item
   *
   */
  const handleLogOut = () => {
    localStorage.removeItem("profileData");
    navigate(Route(ROUTE_CONFIG.PRODUCT));
  };

  /**
   * Handle Set Input Data When Click HashTag
   * @param item
   *
   */
  const handleAddHashTag = (item: string) => {
    (document.querySelector("#inputSearch") as HTMLInputElement).value = item;
    choice(item);
    setIsDisabled(true);
    navigate(Route(`${ROUTE_CONFIG.PRODUCT}/${item} `), {
      state: {
        hashtag: item,
      },
    });
  };

  /**
   * Function add Category
   * @param item
   *
   */
  const handleAddCategory = (item: TCategoryState) => {
    if (nameCategory !== item.categoryID) {
      choiceCategory(item.categoryID);
      navigate(
        Route(
          `${ROUTE_CONFIG.PRODUCT}/Category?keyword=${item.categoryName}&CategoryId=${item.categoryID}`
        )
      );
    }
  };

  useEffect(() => {
    handleCheckType();
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        searchRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsDisabled(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    handleNav,
    handleOpen,
    tag,
    handleChangeSearch,
    searchRef,
    inputSearch,
    isDisabled,
    listHashtag,
    handleAddHashTag,
    countCart,
    inputRef,
    userName,
    userImage,
    handleLogOut,
    list,
    handleAddCategory,
    isSearch,
    handleDrop,
    handleDragOver,
    isAdmin
  };
};
