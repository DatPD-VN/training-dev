import styles from "./styles.module.scss";
import { FC } from "react";
import { useDataProducts } from "./hook";
import { ReactSortable } from "react-sortablejs";
import { TListProduct } from "../product/type";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DataProducts: FC = () => {
  const navigate = useNavigate();
  const {
    lists,
    handleSetList,
    currentItems,
    paginate,
    totalPages,
    currentPage,
    itemsPerPage,
  } = useDataProducts();
  return (
    <>
      <section className={styles.containerDataProduct}>
        <h4 className={styles.containerDataProductTitle}>Thông Tin Sản Phẩm</h4>

        <div className={styles.tableDataProduct}>
          <ul className={styles.tableDataProductTitle}>
            <li className={styles.theadDataProductStt}>STT</li>
            <li className={styles.theadDataProductImage}>Image</li>
            <li className={styles.theadDataProductName}>Tên Sản Phẩm</li>
            <li className={styles.theadDataProductPrice}>Giá</li>
            <li className={styles.theadDataProductSale}>Sale</li>
            <li className={styles.theadDataProductHashtag}>HashTag</li>
            <li className={styles.theadDataProductCategory}>Danh Mục</li>
          </ul>

          <ReactSortable
            filter=".addImageButtonContainer"
            dragClass="sortableDrag"
            list={lists.map((item) => ({ ...item }))}
            setList={handleSetList}
            animation={200}
            easing="ease-out"
            className={styles.listWrapper}
          >
            {currentItems.map((item: TListProduct, index: number) => (
              <ul key={index}>
                <li className={styles.tbodyDataProductStt}>
                  {currentPage == 1 ? index + 1 : index + 1 + itemsPerPage}
                </li>
                <li
                  className={styles.tbodyDataProductImage}
                  onClick={() => {
                    navigate(Route(ROUTE_CONFIG.DETAIL_PRODUCT), {
                      state: {
                        id: item.id,
                      },
                    });
                  }}
                >
                  <img src={item.imgProduct} alt="" />
                </li>
                <li className={styles.tbodyDataProductName}>
                  <span>{item.titleProduct}</span>
                </li>
                <li className={styles.tbodyDataProductPrice}>
                  {item.priceProduct?.toLocaleString("it-IT")}
                  <span className={styles.iconPrice}>₫</span>
                </li>
                <li className={styles.tbodyDataProductSale}>
                  {item.saleProduct}
                </li>
                <li className={styles.tbodyDataProductHashtag}>
                  {item.hashTag.map((item, index) => (
                    <span key={index}>{item} , </span>
                  ))}
                </li>
                <li className={styles.tbodyDataProductCategory}>
                  {item.categoryName}
                </li>
              </ul>
            ))}
          </ReactSortable>
        </div>
        <div className={styles.containerPatination}>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export { DataProducts };
