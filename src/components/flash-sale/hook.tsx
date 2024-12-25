import { useEffect, useState } from "react";
import { TUseFlashSale } from "./type";

const useFlashSale = (time: number): TUseFlashSale => {
  const [remainingTime, setRemainingTime] = useState(time);
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  /**
   * Function Scroll Animation Number
   * @param id string
   * @param number number
   */
  const scrollToNumber = (id: string, number: number) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.transform = ` translateY(-${number * 17}px)`;
      element.style.transitionDuration = `${
        number == 0 ? "150ms" : "300ms"
      }   `;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollToNumber("hours-first", Math.floor(hours / 10));
    scrollToNumber("hours-seconds", hours % 10);
    scrollToNumber("minutes-first", Math.floor(minutes / 10));
    scrollToNumber("minutes-seconds", minutes % 10);
    scrollToNumber("seconds-first", Math.floor(seconds / 10));
    scrollToNumber("seconds-seconds", seconds % 10);
  }, [hours, minutes, seconds]);

  return { hours, minutes, seconds };
};

export default useFlashSale;
