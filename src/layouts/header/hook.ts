import { THeaderProps } from "./type";
import {
  useCountCartState,
  useListSuggest,
  setListSearch,
  setListSuggest,
  setDelCategory,
} from "../../recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Route, { ROUTE_CONFIG } from "../../app/route";

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
  const user : any = (localStorage.getItem("profileData"));
  const userName = JSON.parse(user)?.email 
  const userImage = JSON.parse(user)?.image 

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
    localStorage.removeItem("profileData")
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
    handleLogOut
  };
};
