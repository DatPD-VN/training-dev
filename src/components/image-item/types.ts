type TImage = {
  src: string;
};
type THookImageItem = {
  imageSrc: string[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  handleThumbnailClick: (index: number) => void;
};

export type { TImage, THookImageItem };
