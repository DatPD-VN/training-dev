import { useEffect } from "react";
import { THookSlideShowProps } from "./types";

export const useCarousel = (
  src: string[],
  currentIndex: number,
  onChangeIndex: (index: number) => void
): THookSlideShowProps => {
  /**
   * Function Handle Next Slide
   *
   */
  const nextSlide = () => {
    onChangeIndex(currentIndex === src.length - 1 ? 0 : currentIndex + 1);
  };

  /**
   * Function Handle Prev Slide
   *
   */
  const prevSlide = () => {
    onChangeIndex(currentIndex === 0 ? src.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, src.length]);

  return {
    nextSlide,
    prevSlide,
  };
};
