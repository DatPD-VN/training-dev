import { useState } from "react";
import { SRC_FAKE_BANNER } from "../../const";
import { THookImageItem } from "./type";

export const useBanner = (): THookImageItem => {
  const imageSrc = [...SRC_FAKE_BANNER.map((item) => item.src)];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return {
    imageSrc,
    selectedIndex,
    setSelectedIndex,
  };
};
