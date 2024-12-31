import styles from "./styles.module.scss";
import { FC } from "react";
import {
  ArrowLeft,
  BadgeDollarSign,
  ChevronRight,
  CircleHelp,
  MapPin,
  Ticket,
  TicketX,
  Wallet,
  WalletMinimal,
} from "lucide-react";
import { useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { useAddProduct } from "./hook";
import { TCartState } from "../../recoil/type";

const AddProduct: FC = () => {
  const navigate = useNavigate();
  const { cart, isPhoneScreen, totalCart, countCart, handleSubmit } =
    useAddProduct();
  return (
    <>
      {isPhoneScreen && (
        <section className={styles.containerCart}>
          <header className={styles.headerWrapMobile}>
            <div
              className={styles.headerWrapLeftMobile}
              onClick={() => {
                navigate(Route(ROUTE_CONFIG.CART));
              }}
            >
              <ArrowLeft size={25} />
            </div>
            <div className={styles.headerWrapMiddleMobile}>Thanh toán</div>
          </header>
          <div className={styles.headerWrapInformationUserMobile}>
            <div className={styles.headerWrapContentMobile}>
              <div className={styles.headerWrapContentTitleMobile}>
                <MapPin size={17} color="green" />
              </div>
              <div className={styles.headerWrapContentMainMobile}>
                <div className={styles.headerWrapContentWrapperMobile}>
                  <p className={styles.headerWrapContentNameMobile}>
                    Nguyễn Bảo Quốc{" "}
                    <span className={styles.headerWrapContentPhoneMobile}>
                      03354328187
                    </span>
                  </p>
                  <p className={styles.headerWrapContentAddressMobile}>
                    114/6 Phan Văn Định, Phường Hòa Khánh Bắc, Quận Liên Chiểu,
                    Đà Nẵng
                  </p>
                </div>
                <ChevronRight color="gray" />
              </div>
            </div>
          </div>
          <div className={styles.bodyWrapMobile}>
            {cart.map((item: TCartState, index: number) => (
              <section key={index} className={styles.itemWrapMobile}>
                <div className={styles.itemWrapInformationMobile}>
                  <div
                    className={`${styles.itemWrapInfoMobile} ${styles.div40}`}
                  >
                    <img
                      src={item.imgProduct}
                      alt=""
                      className={styles.itemWrapInfoImgMobile}
                    />
                    <div className={styles.itemWrapInfoTitleMobileWrapper}>
                      <div className={styles.itemWrapInfoTitleMobile}>
                        <p>{item.titleProduct}</p>
                        <span>Đen,S</span>
                      </div>
                      <div className={styles.itemWrapInfoPriceNewMobileWrapper}>
                        <div className={styles.itemWrapInfoPriceNewMobile}>
                          <span>₫</span>
                          {item.priceProduct.toLocaleString("it-IT")}
                        </div>
                        <div className={styles.DetailProductDivAmountMobile}>
                          <span>x</span>
                          {item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
            <section className={styles.footerWrapMobile}>
              <div className={styles.footerWrapTopMobile}>
                <div className={styles.footerWrapTopVoucherMobile}>
                  <Ticket color="#ff4807" size={20} />
                  <span>Riche Voucher</span>
                </div>
                <div className={styles.footerWrapTopRightMobile}>
                  <a href="">Chọn hoặc nhập mã</a>
                  <ChevronRight size={20} />
                </div>
              </div>
              <div className={styles.footerWrapMiddleMobile}>
                <div className={styles.footerWrapMiddleWrapMobile}>
                  <BadgeDollarSign size={17} color="yellow" />
                  <span className={styles.footerWrapMiddleSelectMobile}>
                    Dùng 100 Riche Xu
                  </span>
                </div>
                <div className={styles.footerWrapMiddlePriceVoucherMobile}>
                  <ChevronRight size={19} />
                </div>
              </div>
            </section>
            <section className={styles.footerWrapMobile}>
              <div className={styles.footerWrapTopMobile}>
                <div className={styles.footerWrapTopVoucherMobile}>
                  <span>Phương thức thanh toán</span>
                </div>
                <div className={styles.footerWrapTopRightMobile}>
                  <a href="">Xem tất cả</a>
                  <ChevronRight size={20} />
                </div>
              </div>
              <div className={styles.footerWrapMiddleMobile}>
                <div className={styles.footerWrapMiddleWrapMobile}>
                  <TicketX size={17} color="red" />
                  <span className={styles.footerWrapMiddleSelectMobile}>
                    Thanh toán khi nhận hàng
                  </span>
                </div>
                <div className={styles.footerWrapMiddlePriceVoucherMobile}>
                  <ChevronRight size={19} />
                </div>
              </div>
              <div className={styles.footerWrapMiddleMobile}>
                <div className={styles.footerWrapMiddleWrapMobile}>
                  <WalletMinimal size={17} color="red" />
                  <span className={styles.footerWrapMiddleSelectMobile}>
                    Ví RichePay
                  </span>
                </div>
                <div className={styles.footerWrapMiddleButtonMobile}>
                  Thiết lập Ví
                </div>
              </div>
              <div className={styles.footerWrapMiddleMobile}>
                <div className={styles.footerWrapMiddleWrapMobile}>
                  <Wallet size={17} color="red" />
                  <div className={styles.footerWrapMiddleSelectMobile}>
                    <p>RPayLater</p>
                    <span>Trả sau lên đến 45 ngày</span>
                  </div>
                </div>
                <div className={styles.footerWrapMiddleButtonMobile}>
                  Kích Hoạt ngay
                </div>
              </div>
            </section>
            <section className={styles.footerWrapMobile}>
              <div className={styles.footerWrapTopMobile}>
                <div className={styles.footerWrapTopVoucherMobile}>
                  <span>Chi tiết thanh toán</span>
                </div>
              </div>
              <div className={styles.footerWrapBottomWrapMobile}>
                <div className={styles.footerWrapBottomWrapMobileTitle}>
                  Tổng tiền hàng
                </div>
                <div className={styles.footerWrapBottomWrapMobilePrice}>
                  đ123.000
                </div>
              </div>
              <div className={styles.footerWrapBottomWrapMobile}>
                <div className={styles.footerWrapBottomWrapMobileTitle}>
                  Tổng tiền phí vận chuyển
                </div>
                <div className={styles.footerWrapBottomWrapMobilePrice}>
                  đ103.000
                </div>
              </div>
              <div className={styles.footerWrapBottomWrapMobile}>
                <div className={styles.footerWrapBottomWrapMobileTitle}>
                  Giảm giá phí vận chuyển
                </div>
                <div className={styles.footerWrapBottomWrapMobilePrice}>
                  -đ23.000
                </div>
              </div>
              <div className={styles.footerWrapBottomWrapMobileMain}>
                <div className={styles.footerWrapBottomWrapMobileTitle}>
                  Tổng thanh toán
                </div>
                <div className={styles.footerWrapBottomWrapMobilePrice}>
                  đ2123.000
                </div>
              </div>
            </section>
            <div className={styles.footerDescription}>
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
              <span>Điều khoản Riche</span>
            </div>

            <section className={styles.footerWrapMobileTotal}>
              <div className={styles.footerWrapBottomMobile}>
                <div className={styles.footerWrapBottomLeftMobile}></div>
                <div className={styles.footerWrapBottomRightMobile}>
                  <span className={styles.footerWrapBottomRightTotalMobile}>
                    Tổng thanh toán ({countCart}) :
                  </span>
                  <div className={styles.footerWrapBottomRightPriceTotalMobile}>
                    <span>₫</span> {totalCart.toLocaleString("it-IT")}
                  </div>
                  <button
                    type="button"
                    className={styles.footerWrapBottomRightButtonMobile}
                    onClick={handleSubmit}
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}
      {!isPhoneScreen && (
        <>
          <section className={styles.container}>
            <header className={styles.headerWrap}>
              <div className={styles.headerWrapLeft}>
                <div>Thêm Sản Phẩm</div>
              </div>
            </header>
            <div className={styles.body}>
              <header className={styles.header}>
                <h1 className={styles.heading1}>Product Import System</h1>
              </header>
              <main className={styles.main}>
                <h2 className={styles.heading2}>Import Product Information</h2>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Product Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      name="description"
                      required
                    ></textarea>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="price">Price:</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" required>
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                      <option value="home">Home & Garden</option>
                      <option value="toys">Toys & Games</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="sku">SKU:</label>
                    <input type="text" id="sku" name="sku" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="stockQuantity">Stock Quantity:</label>
                    <input
                      type="number"
                      id="stockQuantity"
                      name="stockQuantity"
                      min="0"
                      required
                    />
                  </div>
                  <button type="submit" className={styles.button}>
                    Import Product
                  </button>
                </form>
              </main>
              <footer className={styles.footer}>
                <p>&copy; 2023 Product Import System. All rights reserved.</p>
              </footer>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export { AddProduct };
