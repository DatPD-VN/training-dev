import styles from "./styles.module.scss";
import { FC } from "react";
import { useHistoryOrder } from "./hook";
import { TListProduct } from "../product/type";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HistoryOrder: FC = () => {
  const navigate = useNavigate();
  const {
    currentItems,
    paginate,
    totalPages,
    currentPage,
    itemsPerPage,
    list,
  } = useHistoryOrder();
  return (
    <>
      <section className={styles.containerDataProduct}>
        <h4 className={styles.containerDataProductTitle}>Thông Tin Đơn Hàng</h4>

        <div className={styles.tableDataProduct}>
          <ul className={styles.tableDataProductTitle}>
            <li className={styles.theadDataProductStt}>STT</li>
            <li className={styles.theadDataProductImage}>Image</li>
            <li className={styles.theadDataProductName}>Tên Sản Phẩm</li>
            <li className={styles.theadDataProductPrice}>Tổng tiền</li>
            <li className={styles.theadDataProductSale}>Số lượng</li>
            <li className={styles.theadDataProductHashtag}>ID User</li>
            <li className={styles.theadDataProductCategory}>Danh Mục</li>
          </ul>
          <div className={styles.listWrapper}>
            {list ? (
              currentItems?.map((item: TListProduct, index: number) => (
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
                    {item.quantity &&
                      (item.priceProduct * item.quantity)?.toLocaleString(
                        "it-IT"
                      )}
                    <span className={styles.iconPrice}>₫</span>
                  </li>
                  <li className={styles.tbodyDataProductSale}>
                    {item.quantity}
                  </li>
                  <li className={styles.tbodyDataProductHashtag}>
                    {item.idUser}
                  </li>
                  <li className={styles.tbodyDataProductCategory}>
                    {item.categoryName}
                  </li>
                </ul>
              ))
            ) : (
              <div>Hiện tại chưa có đơn hàng nào!</div>
            )}
          </div>
        </div>
        {list && (
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
        )}
      </section>
    </>
  );
};

export { HistoryOrder };
