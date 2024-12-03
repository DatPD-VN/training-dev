import { Ellipsis, ThumbsUp } from "lucide-react";
import styles from "./styles.module.scss";
import { FC } from "react";

const FeedBack: FC = () => {
  return (
    <>
      <div className={styles.feedBackWrapMain}>
        <span className={styles.feedBackWrapMainDivImg}>
          <img
            src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lns78x3c3hbub8_tn"
            alt=""
          />
        </span>
        <div className={styles.feedBackWrapMainWrap}>
          <div className={styles.feedBackWrapMainLabel}>
            <div className={styles.feedBackWrapMainLabelLeft}>
              <p>cgsbtrieulong</p>
              <div>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                  alt=""
                />
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                  alt=""
                />
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                  alt=""
                />
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                  alt=""
                />
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.feedBackWrapMainLabelRight}>
                <ThumbsUp size={20}  className={styles.feedBackWrapMainLabelRightIcon}/>
                <Ellipsis size={20} />
            </div>
          </div>
          <div className={styles.feedBackWrapMainContent}>
          Sáp mềm, dễ sd, thơm nhẹ với lại giữ nếp tóc lâu 👍🏻 nên mua nha mấy chú, review chân thật nhất cho ace luôn
          </div>
          <div className={styles.feedBackWrapMainImg}>
            <img src="https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lp3bvr80rbke99.webp" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lp3bvr80razfae.webp" alt="" />
          </div>
          <div className={styles.feedBackWrapMainTime}>10-12-2023 13:05</div>
        </div>
      </div>    
    </>
  );
};

export { FeedBack };
