type TImage = {
  src: string;
};
type THookImageItem = {
  imageSrc: string[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type { TImage, THookImageItem };
