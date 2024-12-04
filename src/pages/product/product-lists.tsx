import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { newListState, listSearch, addCategory } from "../../recoil";
import { useLocation, useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { ProductLoaing } from "../../components/loading";
import { DELAY_DEFAULT } from "../../const";
import { Categories } from "../../layouts/categories";

const Dashboard: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hashtag = location.state;
  const newList: Array<string> = useRecoilValue(newListState);
  const newSearch: Array<string> = useRecoilValue(listSearch);
  const newCategories: Array<string> = useRecoilValue(addCategory);
  const choise: any = useSetRecoilState(listSearch);
  const [isLoading, setIsLoading] = useState(true);

  if (newSearch.length === 0) {
    if (hashtag) {
      choise(hashtag.hashtag);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, DELAY_DEFAULT);
  }, [newSearch ,newCategories]);
  
  const listProduct = hashtag !== null ? newSearch : ((newCategories.length === 0) ? newList :newCategories );
  return (
    <>
      <section className={styles.mainContainer}>
        <div className={styles.categoriesContainer}>
          <Categories/>
        </div>
        <section className={styles.contaiter}>
          <div className={styles.headerWrapper}>
            {isLoading ? (
              <ProductLoaing quantity={listProduct.length} />
            ) : (
              listProduct.map((item: any, index: any) => (
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
