import { FC } from "react";

import styles from "./styles.module.scss";
import { Bell ,ShieldQuestion,Globe ,ChevronDown  ,Search ,ShoppingCart    } from "lucide-react";



const Dashboard: FC = () => {
  return <>
    <header className={styles.header}>
        <div className={styles.headerTop}>
          <div  className={styles.divTagTop} >
            <a href=""  className={styles.divTagTopA}>
              <Bell className={styles.divTagTopIcon} />{" "}
              <p className={styles.divTagTopATitle}>Thông Báo  </p>
            </a>
          </div>
          <div  className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <ShieldQuestion className={styles.divTagTopIcon} />{" "}
              <p className={styles.divTagTopATitle}>Hỗ Trợ </p>
            </a>
          </div>
          <div  className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Globe className={styles.divTagTopIcon} />{" "}
              <p className={styles.divTagTopATitle}>Tiếng Việt </p>
              <ChevronDown  className={styles.divTagTopIcon}/>{" "}

            </a>
          </div>
          <div  className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <p className={styles.divTagTopATitle}>Đăng Ký </p>
            </a>
          </div>
          <div >
              <p style={{color: "white"}}>| </p>
          </div>
          <div className={styles.divTagTop} >
            <a href=" " className={styles.divTagTopA}>
              <p className={styles.divTagTopATitle}>Đăng Nhập </p>
            </a>
          </div>
        </div>
        <div  className={styles.headerBottom}>
          <div className={styles.headerBottomLeft}>
            <div className={styles.divInput}>
              <input type="text" placeholder="Tìm kiếm "  className={styles.input}/> 
              <Search  className={styles.inputIcon}/>
            </div>
            <div className={styles.DivList}>
                <li className={styles.list}> <a href="">Dép</a> </li>
                <li className={styles.list}> <a href="">Baby Three</a>  </li>
                <li className={styles.list}> <a href="">Ốp lưng</a>  </li>
                <li className={styles.list}> <a href="">Áo khoác</a>  </li>
                <li className={styles.list}> <a href="">Gấu Bông</a>  </li>
                <li className={styles.list}> <a href="">Dép</a> </li>
                <li className={styles.list}> <a href="">Dép</a> </li>
                <li className={styles.list}> <a href="">Dép</a> </li>
                <li className={styles.list}> <a href="">Dép</a> </li>
                <li className={styles.list}> <a href="">Dép</a> </li>
            </div>
          </div>
          <div className={styles.headerBottomRight}>
            <ShoppingCart  className={styles.headerBottomRightIcon}/>
          </div>
        </div>
      </header>


  </>;
};

export { Dashboard };
