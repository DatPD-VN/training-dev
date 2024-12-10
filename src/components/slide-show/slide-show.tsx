import React from "react";
import styles from "./styles.module.scss";
import { TSlideShowProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SlideShow: React.FC<TSlideShowProps> = ({
  src,
  currentIndex,
  onChangeIndex,
}) => {
  const nextSlide = () => {
    onChangeIndex(currentIndex === src.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    onChangeIndex(currentIndex === 0 ? src.length - 1 : currentIndex - 1);
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.button}>
        <ChevronLeft size={40} />
      </button>

      <div className={styles.imageWrapper}>
        <div
          className={styles.imageContainer}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {src.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className={styles.button}>
        <ChevronRight size={40}/>
      </button>
    </div>
  );
};

export { SlideShow };
