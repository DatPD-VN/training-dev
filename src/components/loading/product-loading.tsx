import styles from "./styles.module.scss";
import { FC } from "react";

const ProductLoaing: FC = () => {
  return (
    <>
      <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img src="https://intero.vn/wp-content/uploads/No_Image_Available_thum_488.jpg" alt="" className={`${styles.img} ${styles.loading}`} />
                </div>
                <div className={`${styles.divItemTitle} ${styles.loading}`}></div>
                <div className={`${styles.voucher} ${styles.loading}`}> </div>
                <div className={`${styles.price} ${styles.loading}`}>
                </div>
                </div>
              </div>
            </div>
    </>
  );
};

export { ProductLoaing };
