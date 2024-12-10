type TImage = {
  src: Array<string>;
};
type TSlideShowProps = {
  src: Array<string>;
  currentIndex: number;
  onChangeIndex: (index: number) => void;
};

export type { TSlideShowProps, TImage };
