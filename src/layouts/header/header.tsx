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
import { useRecoilValue } from "recoil";
import { countCartState } from "../../recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Route from "../../app/route";



const Header: FC = () => {
  const navigate = useNavigate();
  const countCart : any = useRecoilValue(countCartState);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOpen = () => {
    setIsDisabled(false)
  }
  const handleBlur = () => {
    setIsDisabled(true)
  }
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
            <div onClick={() => {
              navigate("/training-dev/ec/Products")
            }} className={styles.headerBottomLogoDiv}>
              <Logo/>
            </div>
          </div>
          <div className={styles.headerBottomLeft}>
            <div className={styles.divInput}>
              <input
                type="text"
                placeholder="Tìm kiếm "
                onClick={handleOpen}
                className={styles.input}
                onBlur={handleBlur}
              />
              <Search className={styles.inputIcon} />
              {!isDisabled && <div className={styles.divInputSearchWrap}>
                <ul className={styles.divInputSearch}>
                  <li>Hoa quả   <ArrowUpLeft color="gray" /></li>
                  <li>Hoa quả Hoa quảHoa quảHoa quảHoa quả  <ArrowUpLeft color="gray" /></li>
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
