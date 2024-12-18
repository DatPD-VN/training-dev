import { THeaderProps } from "./type";
import {
  useCountCartState,
  useListSuggest,
  setListSearch,
  setListSuggest,
  setDelCategory,
  useListCategory,
  setAddCategory,
} from "../../recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { TCategoryState } from "../../recoil/type";

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
  const user: any = localStorage.getItem("profileData");
  const userName = JSON.parse(user)?.email;
  const userImage = JSON.parse(user)?.image;
  const list: Array<TCategoryState> = useListCategory();
  const choiceCategory = setAddCategory();
  const searchParams = new URLSearchParams(location.search);
  const keyword = Number(searchParams.get("CategoryId"));
  const nameCategory: number = keyword ? keyword : -1;

  // Handle Open Nav Search
  const handleOpen = () => {
    setIsDisabled(false);
  };

  // Handle Set Input Data When Click Search
  const inputSearch = () => {
    const valueInput = searchRef.current;
    const value = valueInput?.value;
    choice(value);
    navigate(Route(`${ROUTE_CONFIG.PRODUCT}/${value} `), {
      state: {
        hashtag: value,
      },
    });
  };

  // Delete value Input and Navigate
  const handleNav = () => {
    ((document.querySelector("#inputSearch") as HTMLInputElement).value = ""),
      delData();
    navigate(Route(ROUTE_CONFIG.PRODUCT));
  };

  // Handle LogOut
  const handleLogOut = () => {
    localStorage.removeItem("profileData");
    navigate(Route(ROUTE_CONFIG.PRODUCT));
  };

  // Handle Set Input Data When Click HashTag
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

  // Function add Category
  const handleAddCategory = (item: TCategoryState) => {
    if (nameCategory !== item.categoryID) {
      choiceCategory(item.categoryID);
      navigate(
        Route(
          `${ROUTE_CONFIG.PRODUCT}/Category/?keyword=${item.categoryName}&CategoryId=${item.categoryID} `
        )
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
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
    handleSearch,
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
  };
};
