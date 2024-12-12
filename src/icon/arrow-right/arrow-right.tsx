import { FC } from "react";
import styles from "./styles.module.scss";

const ArrowRight: FC = () => {
  return (
    <svg
      viewBox="0 0 4 7"
      className={`${styles.arrowRightCategories} shopee-svg-icon shopee-category-list__main-category__caret icon-down-arrow-right-filled `}
    >
      <polygon points="4 3.5 0 0 0 7"></polygon>
    </svg>
  );
};
export { ArrowRight };
