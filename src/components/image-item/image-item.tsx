import styles from "./styles.module.scss";
import React, { useState } from "react";
import { TImage } from "./types";
import { SlideShow } from "../slide-show";

const ImageItem: React.FC<TImage> = ({ src }) => {
   const fakeSrc = [
    `${src}`,
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rd45-lun0zz9gy26194_tn.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2sdfew3cmnu5b_tn.webp",
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rd45-lun0zz9gy26194_tn.webp",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className={styles.detailProductLeftImg}>
        <SlideShow
          src={fakeSrc}
          currentIndex={selectedIndex}
          onChangeIndex={setSelectedIndex}
        />
      </div>
      <div className={styles.dots}>
        {fakeSrc.map((_, index) => (
          <span
            className={`${styles.dot}  ${
              index === selectedIndex ? styles.active : ""
            }`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          ></span>
        ))}
      </div>
      <div className={styles.detailProductLeftSmall}>
        {fakeSrc.map((image, index) => (
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
