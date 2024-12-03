import { FC } from "react";
import {
  Bell,
  ShieldQuestion,
  Globe,
  ChevronDown,
  Search,
  ShoppingCart,
  ArrowUpLeft,
} from "lucide-react";
import styles from "./styles.module.scss";
import Logo from "../../icon/logo";
import { useRecoilValue ,useSetRecoilState } from "recoil";
import { countCartState ,listSugggest ,listSearch } from "../../recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useState ,useRef ,useEffect } from "react";
import Route from "../../app/route";


const Header: FC = () => {
  const navigate = useNavigate();
  const countCart : any = useRecoilValue(countCartState);
  const listHashtag : any = useRecoilValue(listSugggest);
  const choise : any = useSetRecoilState(listSearch);
  const handleSearch : any = useSetRecoilState(listSugggest);
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const hashtag = location.state;
  const tag = (hashtag !== null) ? hashtag.hashtag : null 

  const handleOpen = () => {
    setIsDisabled(false)
  }
  const inputSearch = () => {
    const valueInput = searchRef.current;
    const value = valueInput?.value;
    choise(value)
  }
  const handleNav = () => {
      (document.querySelector("#input") as HTMLInputElement).value = "",
      navigate(Route('Products'))
  }
  const handleAdd = (item : any) => {
    (document.querySelector("#input") as HTMLInputElement).value = item
    choise(item)
    setIsDisabled(true)
    navigate(Route(`Products/${item} `),{
      state: {
        hashtag: item
      }
    })
  }
  useEffect(() => {
    
    const handleClickOutside = (event : any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsDisabled(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return <>
  <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Bell className={styles.divTagTopIcon} />
              <p className={styles.divTagTopATitle}>Thông Báo </p>
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <ShieldQuestion className={styles.divTagTopIcon} />
              <p className={styles.divTagTopATitle}>Hỗ Trợ </p>
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Globe className={styles.divTagTopIcon} />
              <p className={styles.divTagTopATitle}>Tiếng Việt </p>
              <ChevronDown className={styles.divTagTopIcon} />
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="/training-dev/ec/login" className={styles.divTagTopA}>
              <p className={styles.divTagTopATitle}>Đăng Ký </p>
            </a>
          </div>
          <div>
            <p style={{ color: "white" }}>| </p>
          </div>
          <div className={styles.divTagTop}>
            <a href="/training-dev/ec/login " className={styles.divTagTopA}>
              <p className={styles.divTagTopATitle}>Đăng Nhập </p>
            </a>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomLogo}>
            <div onClick={() => {handleNav()}} className={styles.headerBottomLogoDiv}>
              <Logo/>
            </div>
          </div>
          <div className={styles.headerBottomLeft}>
         
            <div className={styles.divInput}>
              <input
                type="text"
                placeholder={tag ? tag : "Tìm kiếm"}
                onClick={handleOpen}
                className={styles.input}
                onChange={(e) => {handleSearch(e.target.value.toLowerCase())}}
                id="input"
                autoComplete="false"
                ref={searchRef}
              />
              <Search className={styles.inputIcon} onClick={() => {inputSearch()}} />
              
              {!isDisabled && <div className={styles.divInputSearchWrap}  ref={inputRef} >

                <ul className={styles.divInputSearch} >
                    {listHashtag.map((item : any , index : number ) =>  {
                     return   <li key={index} onClick={() => {handleAdd(item)}}>{item}<ArrowUpLeft color="gray" /></li>
})}
                </ul>
              </div> }
            </div>  
            <div className={styles.DivList}>
              <li className={styles.list}>
                <a href="">Dép</a>
              </li>
              <li className={styles.list}>
                <a href="">Baby Three</a>
              </li>
              <li className={styles.list}>
                <a href="">Ốp lưng</a>
              </li>
              <li className={styles.list}>
                <a href="">Áo khoác</a>
              </li>
              <li className={styles.list}>
                <a href="">Gấu Bông</a>
              </li>
              <li className={styles.list}>
                <a href="">Chân Váy</a>
              </li>
              <li className={styles.list}>
                <a href="">Váy Nữ</a>
              </li>
              <li className={styles.list}>
                <a href="">Kẹp Tóc </a>
              </li>
            </div>
          </div>
          <div className={styles.headerBottomRight}>
            <div onClick={() => {navigate(Route("Cart"))}} className={styles.headerBottomRightIconDiv}>
              <ShoppingCart size={30} className={styles.headerBottomRightIcon} />
              <div className={styles.headerBottomRightIconDivCount}>{countCart}</div>
            </div>
          </div>
        </div>
      </header>
  </>;
};

export { Header };
