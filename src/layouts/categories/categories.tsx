import { FC } from "react";
import styles from "./styles.module.scss";
import { ChevronDown, Menu } from "lucide-react";

import { ArrowRight } from "../../icon/arrow-right/arrow-right";
import { UseCategories } from "./hook";

const Categories: FC = () => {
  const { list, handleAddCategory } = UseCategories();
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
          {list.map((item, index) => (
            <div
              key={index}
              className={styles.categoryDiv}
              onClick={() => handleAddCategory(item)}
            >
              <a href="#">
                <ArrowRight />
                {item}
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
