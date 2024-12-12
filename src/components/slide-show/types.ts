type TImage = {
  src: Array<string>;
};
type TSlideShowProps = {
  src: string[];
  currentIndex: number;
  onChangeIndex: (index: number) => void;
};
type THookSlideShowProps = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export type { TSlideShowProps, TImage, THookSlideShowProps };
