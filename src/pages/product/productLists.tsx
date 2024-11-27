import { FC } from "react";
import styles from "./styles.module.scss";
import { useRecoilValue } from 'recoil';
import { newListState } from '../../recoil';
import {  useNavigate } from "react-router"
import { Header } from "../../layouts/header/header";
import { Footer } from "../../layouts/footer/footer";

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const newList : Array<string> = useRecoilValue(newListState);
  return (
    <>
      <Header/>
      <section className={styles.contaiter}>
        <div className={styles.headerWrapper}>
          {newList.map((item : any, index:any) => (
            <div key={index} className={styles.divItemWrapper} onClick={() => {navigate("DetailProduct",{ 
              state :{
                id : item.id
              }
               })}}>
              <div className={styles.divItemWrapperHover}>
                <div className={styles.divItem}>
                  <div className={styles.divImg}>
                    <img src={item.imgProduct} alt="" className={styles.img} />
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
                  <div className={styles.divItemTitle}>{item.titleProduct}</div>

                  {item.isVoucher && (
                    <div className={styles.voucher}>{item.voucherProduct} </div>
                  )}
                  {!item.isVoucher && (
                    <div className={styles.voucherHidden}>
                      {item.voucherProduct}
                    </div>
                  )}

                  <div className={styles.price}>
                    <span className={styles.iconPrice}>₫</span>
                    {item.priceProduct}
                  </div>
                </div>
                <div className={styles.divItemHover}>Tìm sản phẩm tương tự</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export { Dashboard };