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
import { useOrder } from "./hook";
import { TCartState } from "../../recoil/type";

const Order: FC = () => {
  const navigate = useNavigate();
  const { cart, isPhoneScreen, totalCart, countCart, handleSubmit } =
    useOrder();
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
                <div>Thanh Toán</div>
              </div>
            </header>
            <div className={styles.headerWrapInformationUser}>
              <div className={styles.headerWrapBorder}></div>
              <div className={styles.headerWrapContent}>
                <div className={styles.headerWrapContentTitle}>
                  <MapPin size={17} />
                  Địa Chỉ Nhận Hàng
                </div>
                <div className={styles.headerWrapContentMain}>
                  <div className={styles.headerWrapContentWrapper}>
                    <span className={styles.headerWrapContentName}>
                      Nguyễn Bảo Quốc -
                    </span>
                    <span className={styles.headerWrapContentPhone}>
                      0432418187 -
                    </span>
                    <span className={styles.headerWrapContentAddress}>
                      114/6 Phan Văn Định, Phường Hòa Khánh Bắc, Quận Liên
                      Chiểu, Đà Nẵng
                    </span>
                    <span className={styles.headerWrapContentSelect}>
                      Mặc Định
                    </span>
                  </div>
                  <button>Thay Đổi</button>
                </div>
              </div>
            </div>
            <div className={styles.bodyWrap}>
              <div className={styles.navWrap}>
                <label
                  className={`${styles.navWrapTitleProduct} ${styles.div40}`}
                >
                  Sản Phẩm
                </label>
                <div className={`${styles.navWrapTitle} ${styles.div13}`}>
                  Đơn Giá
                </div>
                <div className={`${styles.navWrapTitle} ${styles.div13}`}>
                  Số Lượng
                </div>
                <div className={`${styles.navWrapTitle} ${styles.div13}`}>
                  Thành Tiền
                </div>
              </div>
              {cart.map((item: TCartState, index: number) => (
                <section key={index} className={styles.itemWrap}>
                  <div className={`${styles.itemWrapInfo} ${styles.div40}`}>
                    <img
                      src={item.imgProduct}
                      alt=""
                      className={styles.itemWrapInfoImg}
                      onClick={() => {
                        navigate(
                          Route(
                            `${ROUTE_CONFIG.DETAIL_PRODUCT}?productId=${item.id}`
                          )
                        );
                      }}
                    />
                    <div
                      className={styles.itemWrapInfoTitle}
                      onClick={() => {
                        navigate(
                          Route(
                            `${ROUTE_CONFIG.DETAIL_PRODUCT}?productId=${item.id}`
                          )
                        );
                      }}
                    >
                      <span>{item.titleProduct}</span>
                    </div>
                    <div className={`${styles.itemWrapSelect}`}>
                      <span>Loại:Đen,S</span>
                    </div>
                  </div>
                  <div
                    className={`${styles.itemWrapInfoPrice} ${styles.div13}`}
                  >
                    <div className={styles.itemWrapInfoPriceNew}>
                      <span>₫</span>
                      {item.priceProduct.toLocaleString("it-IT")}
                    </div>
                  </div>
                  <div className={`${styles.itemWrapAmount} ${styles.div13}`}>
                    <div className={styles.DetailProductDivAmount}>
                      {item.quantity}
                    </div>
                  </div>
                  <div
                    className={`${styles.itemWrapTotalPrice} ${styles.div13}`}
                  >
                    <span>₫</span>
                    {(item.priceProduct * item.quantity).toLocaleString(
                      "it-IT"
                    )}
                  </div>
                </section>
              ))}
              <section className={styles.footerWrap}>
                <div className={styles.footerWrapTop}>
                  <div className={styles.footerWrapTopVoucher}>
                    <Ticket color="#ff4807" size={15} />
                    <span>Riche Voucher</span>
                  </div>
                  <a href="">Chọn hoặc nhập mã</a>
                </div>
                <div className={styles.footerWrapMiddle}>
                  <div className={styles.footerWrapMiddleWrap}>
                    <input
                      type="checkbox"
                      className={styles.footerWrapMiddleInput}
                    />
                    <BadgeDollarSign
                      size={17}
                      className={styles.footerWrapMiddleIcon}
                    />
                    <span className={styles.footerWrapMiddleShoppe}>
                      Riche Xu
                    </span>
                    <span className={styles.footerWrapMiddleSelect}>
                      Bạn chưa chọn sản phẩm
                    </span>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.footerWrapMiddlePriceVoucher}>
                    - <span>₫</span>0
                  </div>
                </div>
                <div className={styles.footerShipWrapper}>
                  <div className={styles.footerShipWrapperText}>
                    <span>Lời Nhắn:</span>
                    <input type="text" placeholder="Lưu ý cho Người bán ..." />
                  </div>
                  <div className={styles.footerShipWrapperContent}>
                    <div className={styles.footerShipWrapperTitle}>
                      Phương thức vận chuyển:
                    </div>
                    <div className={styles.footerShipWrapperMain}>
                      <div className={styles.footerShipWrapperSelect}>
                        <span className={styles.footerShipWrapperSelected}>
                          Nhanh
                        </span>
                        <span className={styles.footerShipWrapperSelectChange}>
                          Thay Đổi
                        </span>
                        <span className={styles.footerShipWrapperPrice}>
                          đ32.000
                        </span>
                      </div>
                      <div className={styles.footerShipWrapperMainDescription}>
                        <img
                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/checkout/41fe56ab756fc3082a08.svg"
                          alt=""
                        />
                        Đảm bảo nhận hàng từ 29 Tháng 12 - 31 Tháng 12
                      </div>
                      <div className={styles.footerShipWrapperMainHelper}>
                        Nhận Voucher trị giá ₫15.000 nếu đơn hàng được giao đến
                        bạn sau ngày 31 Tháng 12 2024.
                        <CircleHelp size={15} color="gray" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footerWrapBottomShip}>
                  <div className={styles.footerWrapBottomTitle}>
                    Phương thức thanh toán
                  </div>
                  <div className={styles.footerWrapBottomContent}>
                    <span>Thanh toán khi nhận hàng</span>
                    <button>Thay Đổi</button>
                  </div>
                </div>
                <div className={styles.footerWrapBottomTotal}>
                  <div className={styles.footerWrapBottomTotalWrapper}>
                    <p>Tổng tiền hàng</p>
                    <p>
                      <span>₫</span> {totalCart.toLocaleString("it-IT")}
                    </p>
                  </div>
                  <div className={styles.footerWrapBottomTotalWrapper}>
                    <p>Tổng tiền phí vận chuyển</p>
                    <p>đ24.000</p>
                  </div>
                  <div className={styles.footerWrapBottomTotalWrapper}>
                    <p>Tổng thanh toán</p>
                    <h2>
                      <span>₫</span>{" "}
                      {(totalCart + 24000).toLocaleString("it-IT")}
                    </h2>
                  </div>
                </div>
                <div className={styles.footerWrapBottom}>
                  <div className={styles.footerWrapBottomLeft}>
                    Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                    <span> Điều khoản Riche</span>
                  </div>
                  <div className={styles.footerWrapBottomRight}>
                    <button
                      type="button"
                      className={styles.footerWrapBottomRightButton}
                      onClick={handleSubmit}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export { Order };
