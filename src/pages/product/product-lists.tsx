import { FC } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { ProductLoaing } from "../../components/loading";
import { Categories } from "../../layouts/categories";
import { useProduct } from "./hook";

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const { listProduct, isLoading } = useProduct();
  return (
    <>
      <section className={styles.mainContainer}>
        <div className={styles.categoriesContainer}>
          <Categories />
        </div>
        <section className={styles.contaiter}>
          <div className={styles.headerWrapper}>
            {isLoading ? (
              <ProductLoaing quantity={listProduct.length} />
            ) : (
              listProduct.map((item: any, index: number) => (
                <div
                  key={index}
                  className={styles.divItemWrapper}
                  onClick={() => {
                    navigate(Route(ROUTE_CONFIG.DETAIL_PRODUCT), {
                      state: {
                        id: item.id,
                      },
                    });
                  }}
                >
                  <div className={styles.divItemWrapperHover}>
                    <div className={styles.divItem}>
                      <div className={styles.divImg}>
                        <img
                          src={item.imgProduct}
                          alt=""
                          className={`${styles.img}`}
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
                        {item.priceProduct.toLocaleString("it-IT")}
                      </div>
                    </div>
                    <div className={styles.divItemHover}>
                      Tìm sản phẩm tương tự
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export { Dashboard };
