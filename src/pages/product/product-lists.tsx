import { FC } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { ProductLoading } from "../../components/loading";
import { Categories } from "../../layouts/categories";
import { useProduct } from "./hook";
import { TListProduct } from "./type";
import { Banner } from "../../layouts/banner/banner";
import { ReactSortable } from "react-sortablejs";
import { TDataState } from "../../recoil/type";

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const { lists, isLoading, handleDragStart, handleSetList } = useProduct();

  return (
    <>
      <Banner />
      <section className={styles.mainContainer}>
        <div className={styles.categoriesContainer}>
          <Categories />
        </div>
        <section className={styles.container}>
          <div className={styles.headerWrapper}>
            {isLoading ? (
              <ProductLoading quantity={lists.length} />
            ) : (
              <ReactSortable
                filter=".addImageButtonContainer"
                dragClass="sortableDrag"
                list={lists.map((item) => ({ ...item }))}
                setList={handleSetList}
                animation={200}
                easing="ease-out"
                className={styles.headerWrapper}
              >
                {lists.map((item: TDataState, index: number) => (
                  <div
                    key={index}
                    className={` ${styles.divItemWrapper} draggableItem`}
                    onClick={() => {
                      navigate(Route(ROUTE_CONFIG.DETAIL_PRODUCT), {
                        state: {
                          id: item.id,
                        },
                      });
                    }}
                    draggable
                    onDragStart={(event) => handleDragStart(event, item)}
                  >
                    <div className={styles.divItemWrapperHover}>
                      <div className={styles.divItem}>
                        <div className={styles.divImg}>
                          <img
                            src={item.imgProduct}
                            alt=""
                            className={`${styles.img}`}
                            draggable="false"
                          />
                          <div className={styles.divItemSaleOff}>
                            {item.saleProduct}
                          </div>
                          <img
                            src={
                              item.shipProduct
                                ? "https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                                : ""
                            }
                            alt=""
                            className={styles.logoVoucher}
                          />
                        </div>
                        <div className={styles.divItemTitle}>
                          {item.titleProduct}
                        </div>

                        {item.isVoucher && (
                          <div className={styles.voucher}>
                            {item.voucherProduct}{" "}
                          </div>
                        )}
                        {!item.isVoucher && (
                          <div className={styles.voucherHidden}>
                            {item.voucherProduct}
                          </div>
                        )}

                        <div className={styles.price}>
                          <span className={styles.iconPrice}>₫</span>
                          {item.priceProduct?.toLocaleString("it-IT")}
                        </div>
                      </div>
                      <div className={styles.divItemHover}>
                        Tìm sản phẩm tương tự
                      </div>
                    </div>
                  </div>
                ))}
              </ReactSortable>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export { Dashboard };
