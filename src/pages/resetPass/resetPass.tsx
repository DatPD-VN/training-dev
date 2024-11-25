import { FC } from "react";
import { Undo2 } from 'lucide-react';
import styles from "./styles.module.scss";



const RessetPass: FC = () => {
  return <>
  <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text2xl}>Đặt lại mật khẩu </div>
          <div className={styles.headerRight}>
            Bạn cần giúp đỡ ?{" "}
          </div>
        </div>
        <section className={styles.content}>
          <div className={styles.wapper} >
            <Undo2 className={styles.styleIcon}/>
            <h1 className={styles.text2xl}>Đặt lại mật khẩu </h1>
            <input
              type="text"
              placeholder="Email/Số Điện Thoại"
              name="email"
              className={styles.input}
            />
            <div className={styles.wapperTTT} >
                <div className={styles.buttonSubmit}>TIẾP THEO</div>
            </div>
          </div>
        </section>
      </section>
  </>;
};

export { RessetPass };
