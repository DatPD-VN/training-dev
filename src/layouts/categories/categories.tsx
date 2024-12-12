import { FC } from "react";
import styles from "./styles.module.scss";
import { ChevronDown, Menu } from "lucide-react";

import { ArrowRight } from "../../icon/arrow-right/arrow-right";
import { useCategories } from "./hook";
import { TCategoryState } from "../../recoil/type";

const Categories: FC = () => {
  const { list, handleAddCategory,nameCategory } = useCategories();
  return (
    <>
      <section className={styles.containerCategories}>
        <div className={styles.titleCategories}>
          <a href="#">
            <div>
              <Menu size={18} />
            </div>
            Tất cả Danh mục
          </a>
        </div>
        <div className={styles.listCategories}>
          {list.map((item : TCategoryState, index) => (
            (item.categoryName == nameCategory) ? 
            <div
              key={index}
              className={`${styles.categoryDivSelect} } `}
              onClick={() => handleAddCategory(item)} 
            >
              <a href="#">
                <ArrowRight />
                {item.categoryName}
              </a>
            </div> :  <div
              key={index}
              className={`${styles.categoryDiv} } `}
              onClick={() => handleAddCategory(item)} 
            >
              <a href="#">
                <ArrowRight />
                {item.categoryName}
              </a>
            </div>
          ))}
        </div>
        <div className={styles.showCategories}>
          Xem thêm <ChevronDown size={16} />
        </div>
      </section>
    </>
  );
};

export { Categories };
