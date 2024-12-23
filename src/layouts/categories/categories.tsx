import { FC } from "react";
import styles from "./styles.module.scss";
import { ChevronDown, Menu } from "lucide-react";

import { ArrowRight } from "../../icon/arrow-right/arrow-right";
import { useCategories } from "./hook";
import { TCategoryState } from "../../recoil/type";

const Categories: FC = () => {
  const {
    list,
    handleAddCategory,
    nameCategory,
    handleAddDetailCategory,
    detailCategoryId,
    visibleCount,
    setVisibleCount,
  } = useCategories();
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
          {list.slice(0, visibleCount).map((item: TCategoryState, index) =>
            item.categoryID == nameCategory ? (
              <li key={index}>
                <input type="checkbox" name="" id={item.categoryName} hidden />
                <div className={styles.categoryDivSelect}>
                  <a>
                    <ArrowRight />
                    <label
                      htmlFor={item.categoryName}
                      onDoubleClick={() => handleAddCategory(item)}
                    >
                      {item.categoryName}
                    </label>
                  </a>
                </div>
                {item.categoryList.length > 0 && (
                  <ul className={styles.listCategoriesDetail}>
                    {item.categoryList.map((list, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => handleAddDetailCategory(item, list)}
                          className={`${
                            detailCategoryId === list.categoryDetailName
                              ? styles.activeDetailCategory
                              : ""
                          }`}
                        >
                          {list.categoryDetailName}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li key={index}>
                <input type="checkbox" name="" id={item.categoryName} hidden />
                <div key={index} className={styles.categoryDiv}>
                  <a>
                    <ArrowRight />
                    <label
                      htmlFor={item.categoryName}
                      onDoubleClick={() => handleAddCategory(item)}
                    >
                      {item.categoryName}
                    </label>
                  </a>
                </div>
                {item.categoryList.length > 0 && (
                  <ul className={styles.listCategoriesDetail}>
                    {item.categoryList.map((list, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => handleAddDetailCategory(item, list)}
                          className={`${
                            detailCategoryId === list.categoryDetailName
                              ? styles.activeDetailCategory
                              : ""
                          }`}
                        >
                          {list.categoryDetailName}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            )
          )}
        </div>
        {visibleCount < list.length && (
          <div
            className={styles.showCategories}
            onClick={() => setVisibleCount(list.length)}
          >
            Xem thêm <ChevronDown size={16} />
          </div>
        )}
      </section>
    </>
  );
};

export { Categories };
