import { FC } from "react";
import {
  Bell,
  ShieldQuestion,
  Globe,
  ChevronDown,
  Search,
  ShoppingCart,
} from "lucide-react";
import styles from "./styles.module.scss";
import Logo from "../../icon/logo";
import { useRecoilValue } from "recoil";
import { countCartState } from "../../recoil";
import { useNavigate } from "react-router-dom";
import Route from "../../app/route";



const Header: FC = () => {
  const navigate = useNavigate();
  const countCart : any = useRecoilValue(countCartState);
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
              navigate(Route("Products"))
            }} className={styles.headerBottomLogoDiv}>
              <Logo/>
            </div>
          </div>
          <div className={styles.headerBottomLeft}>
            <div className={styles.divInput}>
              <input
                type="text"
                placeholder="Tìm kiếm "
                className={styles.input}
              />
              <Search className={styles.inputIcon} />
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
          <div className={styles.headerBottomRightDivImg}>
            <div onClick={() => {navigate(Route("Cart"))}} className={styles.headerBottomRightIconDiv}>
              <img src="https://down-vn.img.susercontent.com/file/vn-11134226-7ras8-m18dlgfhrbq4f8_tn" alt=""  className={styles.headerBottomRightImg}/>
            </div>
          </div>
        </div>
      </header>
  </>;
};

export { Header };
