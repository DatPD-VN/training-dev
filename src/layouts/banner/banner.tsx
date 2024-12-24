import { FC } from "react";
import styles from "./styles.module.scss";
import {
  BANNER_RIGHT_BOTTOM,
  BANNER_RIGHT_TOP,
  BOTTOM_BANNER,
} from "../../const";
import { Carousel } from "../../components/carousel";
import { useBanner } from "./hook";

const Banner: FC = () => {
  const { imageSrc, selectedIndex, setSelectedIndex } = useBanner();
  return (
    <>
      <section className={styles.containerBanner}>
        <div className={styles.containerBannerWrapper}>
          <div className={styles.bannerLeft}>
            <Carousel
              src={imageSrc}
              currentIndex={selectedIndex}
              onChangeIndex={setSelectedIndex}
            />
            <div className={styles.navigations}>
              {imageSrc.map((_, index) => (
                <span
                  className={`${styles.navigation}  ${
                    index === selectedIndex ? styles.active : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className={styles.bannerRight}>
            <img
              src={BANNER_RIGHT_TOP}
              alt=""
              className={styles.bannerRightTop}
            />
            <img
              src={BANNER_RIGHT_BOTTOM}
              alt=""
              className={styles.bannerRightBottom}
            />
          </div>
        </div>
      </section>
      <section className={styles.containerBannerBottom}>
        <div className={styles.containerBannerBottomWrapper}>
          {BOTTOM_BANNER.map((item, index) => (
            <div key={index} className={styles.containerBannerDivImg}>
              <img src={item.src} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export { Banner };
