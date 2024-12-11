import styles from "./styles.module.scss";
import React from "react";
import { TImage } from "./types";
import { SlideShow } from "../slide-show";
import { useImageItem } from "./hook";

const ImageItem: React.FC<TImage> = ({ src }) => {
  const { imageSrc, selectedIndex, setSelectedIndex, handleThumbnailClick } =
    useImageItem(src);

  return (
    <>
      <div className={styles.detailProductLeftImg}>
        <SlideShow
          src={imageSrc}
          currentIndex={selectedIndex}
          onChangeIndex={setSelectedIndex}
        />
      </div>
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
      <div className={styles.detailProductLeftSmall}>
        {imageSrc.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export { ImageItem };
