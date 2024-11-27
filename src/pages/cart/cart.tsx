import { FC } from "react";
import { BadgeDollarSign, ChevronDown, Search, Ticket } from "lucide-react";

import styles from "./styles.module.scss";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/noPlus";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCartState ,totalCartState ,delCartState ,handleCartState,countCartState } from "../../recoil";
import { Header } from "../../layouts/header/header";

const Cart: FC = () => {
  const cart : any  = useRecoilValue(addCartState);
  const totalCart : any = useRecoilValue(totalCartState);
  const countCart : any = useRecoilValue(countCartState);
  const delCart = useSetRecoilState(delCartState);
  const handleCart = useSetRecoilState(handleCartState);
  const hadleDel = (id : any) => () => {
    delCart(id);
  }
  
  const hadleCase = (handle : any , item : any) => () => {
    let handleDetail = {handle , item}
    handleCart(handleDetail);
  }

  return (
    <>
    <Header/>
      <section className={styles.container}>
        <header className={styles.headerWrap}>
          <div className={styles.headerWrapLeft}>
            <div>
               Giỏ Hàng
            </div>
            </div>
          <div className={styles.headerWrapRight}>
            <input type="text" placeholder="Tìm Kiếm" name="" id="" />
            <div className={styles.headerWrapRigthSearchDiv}>
              <Search size={20} />
            </div>
          </div>
        </header>
        <div  className={styles.bodyWrap}>
          <div   className={styles.navWrap}>
            <div  className={`${styles.navWrapInput} ${styles.div5}`}>
              <input type="checkbox" name="" id="" />
            </div>
            <div className={`${styles.navWrapTitleProduct} ${styles.div40}`}>Sản Phẩm</div>
            <div className={`${styles.navWrapTitle} ${styles.div13}`}>Đơn Giá</div>
            <div className={`${styles.navWrapTitle} ${styles.div13}`}>Số Lượng</div>
            <div className={`${styles.navWrapTitle} ${styles.div13}`}>Số Tiền </div>
            <div className={`${styles.navWrapTitle} ${styles.div13}`}>Thao tác</div>
          </div>
          {/* Item */}
          {cart.map((item : any, index : any) => (
            <section key={index} className={styles.itemWrap}>
              <div className={`${styles.itemWrapInput} ${styles.div5}`}>
                <input type="checkbox"  />
              </div>
              <div className={`${styles.itemWrapInfo} ${styles.div40}`}>
                <img src={item.imgProduct} alt="" className={styles.itemWrapInfoImg} />
                <div className={styles.itemWrapInfoTitle} >
                  <span >
                    {item.titleProduct}
                  </span>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2waud2e3pbk8b"
                    alt=""
                  />
                </div>
                <div className={`${styles.itemWrapSelect}`}>
                <span>Phân Loại Hàng:</span>
                <select>
                  <option value="M">M1 MIC DẢI BOX</option>
                </select>
              </div>
              </div>
              <div className={`${styles.itemWrapInfoPrice} ${styles.div13}`}>
                <div className={styles.itemWrapInfoPriceOld}>
                  <span>₫</span>
                  125.000
                </div>
                <div className={styles.itemWrapInfoPriceNew}>
                  <span>₫</span>
                  {(item.priceProduct.toLocaleString('it-IT'))}
                </div>
              </div>
              <div className={`${styles.itemWrapAmount} ${styles.div13}`}>
                <div className={styles.DetailProductDivAmount}>
                  <button onClick={hadleCase("giam" ,item)}>
                    <NoPlus />
                  </button>
                  <input type="number"  min={1} defaultValue={item.quanlity} value={item.quanlity} name="" id="" />
                  <button onClick={hadleCase("tang",item)}>
                    <Plus />
                  </button>
                </div>
              </div>
              <div className={`${styles.itemWrapTotalPrice} ${styles.div13}`}>
                  <span>₫</span>
                  {((item.priceProduct * item.quanlity).toLocaleString('it-IT'))}
              </div>
              <div className={`${styles.itemWrapHandle} ${styles.div13}`} >
                <span onClick={hadleDel(item.id)}>Xóa</span>
                
                <div className={styles.itemWrapHandleDiv} >
                  <span>Tìm sản phẩm tương tự</span>
                  <ChevronDown size={17} />
                </div>
              </div>  
          </section>
          ))}
          {/* Total Cart */}
          <section className={styles.footerWrap}>
            <div className={styles.footerWrapTop}>
              <div className={styles.footerWrapTopVoucher}>
                <Ticket color="#ff4807" size={15} />
                <span>Shoppe Voucher</span>
              </div>
              <a href="">Chọn hoặc nhập mã</a>
            </div>
            <div className={styles.footerWrapMiddle}>
              <div className={styles.footerWrapMiddleWrap} >
                <input type="checkbox" className={styles.footerWrapMiddleInput}/>
                <BadgeDollarSign size={17} className={styles.footerWrapMiddleIcon} />
                <span className={styles.footerWrapMiddleShoppe}>Shopee Xu</span>
                <span className={styles.footerWrapMiddleSelect}>Bạn chưa chọn sản phẩm
                </span>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg" alt="" />
              </div>
              <div className={styles.footerWrapMiddlePriceVoucher}>- <span>₫</span>0</div>

            </div>
            <div className={styles.footerWrapBottom}>
              <div className={styles.footerWrapBottomLeft}>
                <input type="checkbox" name="" id="" />
                <span className={styles.footerWrapBottomLeftAll}>Chọn Tất Cả</span>
                <span className={styles.footerWrapBottomLeftHadleDel}>Xóa</span>
                <span className={styles.footerWrapBottomLeftSave}>Lưu vào mục Đã thích</span>
              </div>
              <div className={styles.footerWrapBottomRight}>
                <span className={styles.footerWrapBottomRightTotal}>Tổng thanh toán ({countCart} Sản phẩm):</span>
                <div className={styles.footerWrapBottomRightPriceTotal}><span>₫</span> {(totalCart.toLocaleString('it-IT'))}
                </div>
                <button type="button" className={styles.footerWrapBottomRightButton}>Mua Hàng</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export { Cart };
