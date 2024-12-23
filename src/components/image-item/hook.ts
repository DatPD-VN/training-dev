import { useState } from "react";
import { srcFakeState } from "../../mock/mock-api";
import { THookImageItem } from "./types";

export const useImageItem = (src: string): THookImageItem => {
  const imageSrc = [src, ...srcFakeState.map((item) => item.src)];
  const [selectedIndex, setSelectedIndex] = useState(0);

  /**
   * Function Handle Thumbnail Click
   * @param index: number
   *
   */
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
