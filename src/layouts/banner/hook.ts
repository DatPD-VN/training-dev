import { useState } from "react";
import { srcFakeBanner } from "../../const";
import { THookImageItem } from "./type";

export const useBanner = (): THookImageItem => {
  const imageSrc = [...srcFakeBanner.map((item) => item.src)];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return {
    imageSrc,
    selectedIndex,
    setSelectedIndex,
  };
};
