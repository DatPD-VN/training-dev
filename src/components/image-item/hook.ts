import { useState } from "react";
import { srcFakeState } from "../../mock/mock-api";
import { THookImageItem } from "./types";

export const useImageItem = (src: string): THookImageItem => {
  const imageSrc = [...srcFakeState.map((item) => item.src), src];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  return {
    imageSrc,
    selectedIndex,
    setSelectedIndex,
    handleThumbnailClick,
  };
};
