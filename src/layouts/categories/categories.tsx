import { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { ChevronDown, Menu } from "lucide-react";
import { ArrowRight } from "../../icon/arrow-right";
import { listCategory ,addCategory } from "../../recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Categories: FC = () => {
  const list: Array<string> = useRecoilValue(listCategory);
  const setlist: any = useSetRecoilState(listCategory);
  const choise: any = useSetRecoilState(addCategory);

  useEffect(() => {
    setlist()
  },[])
  const handleAddCategory = (item : any) => {
    choise(item)
  };
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
          {list.map((item , index) => (
            <div key={index} className={styles.categoryDiv} onClick={()=>handleAddCategory(item)}>
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
