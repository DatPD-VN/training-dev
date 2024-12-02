import { FC } from "react";
import { ArrowLeft, CircleHelp, Undo2, UserRound } from 'lucide-react';
import {  useNavigate } from "react-router"
import styles from "./styles.module.scss";
import mobile from "./mobile.module.scss";
import { useMediaQuery } from "react-responsive";
import Route from "../../app/route";



const RessetPass: FC = () => {
  const navigate = useNavigate();
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });

  return <>
  {isPhoneScreen &&<section className={styles.container}>
        <header className={mobile.headerWrap}>
              <div className={mobile.headerWrapLeft} onClick={() => {
                navigate(Route("Products"))
              }}>
                <ArrowLeft size={25} />
              </div>
              <div className={mobile.headerWrapMiddle}>
                  Đặt lại mật khẩu
              </div>
              <div className={mobile.headerWrapRight}>
               <CircleHelp  />
              </div>
          </header>
          <div className={mobile.inputWrapper}>
            <div  className={mobile.inputWrap}>
              <UserRound color="gray"/>
              <input type="text" name="" id=""  placeholder="Email/Số Điện Thoại"/>
            </div>
            <div className={mobile.inputButton}>Tiếp theo</div>
          </div>
          

      </section> }

  {!isPhoneScreen && <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text2xl}>Đặt lại mật khẩu </div>
          <div className={styles.headerRight}>
            Bạn cần giúp đỡ ?{" "}
          </div>
        </div>
        <section className={styles.content}>
          <div className={styles.wapper} >
            <Undo2 onClick={() => {navigate(Route("Products"))}} className={styles.styleIcon}/>
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
      </section> }  
      
  </>;
};

export { RessetPass };
