import styles from "./styles.module.scss";
import React from "react";
import { TImage } from "./types";


const ImageItem: React.FC<TImage> = ( { src  }) => {
  
  return (
    <>
      <div className={styles.detailProductLeftImg}>
        <img src={src} alt="" />
      </div>
      <div className={styles.detailProductLeftSmall}>
        <img
          src="https://down-vn.img.susercontent.com/file/578e44d251b0dca4cb7125548b3a33f4@resize_w82_nl.webp"
          alt=""
        />
        <img
          src="https://down-vn.img.susercontent.com/file/a7a9bbab3d57cacd3ec527f275295baf@resize_w82_nl.webp"
          alt=""
        />
        <img
          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llsquqkxobtr32@resize_w82_nl.webp"
          alt=""
        />
        <img
          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprg2jfxgson1e@resize_w82_nl.webp"
          alt=""
        />
        <img
          src="https://down-vn.img.susercontent.com/file/7f75fe490929ecca18fabdb4c178b213@resize_w82_nl.webp"
          alt=""
        />
      </div>
    </>
  );
};

export { ImageItem };
