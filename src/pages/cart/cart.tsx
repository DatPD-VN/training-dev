import styles from "./styles.module.scss";
import { FC } from "react";
import {
  ArrowLeft,
  BadgeDollarSign,
  ChevronDown,
  ChevronRight,
  Search,
  Ticket,
} from "lucide-react";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/no-plus";
import { useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { useCart } from "./hook";
import { TCartState } from "../../recoil/type";

const Cart: FC = () => {
  const navigate = useNavigate();
  const {
    isPhoneScreen,
    listProduct,
    totalCart,
    countCart,
    handleDel,
    handleCase,
    handleSearch,
    inputRef,
    handleCheck,
    handleCheckAll,
    isSelectId,
    handleDelAll,
    handleChangeQuality,
    handleAddCategory,
    handleSubmit,
  } = useCart();
  return (
    <>
      {isPhoneScreen && (
        <section className={styles.containerCart}>
          <header className={styles.headerWrapMobile}>
            <div
              className={styles.headerWrapLeftMobile}
              onClick={() => {
                navigate(Route(ROUTE_CONFIG.PRODUCT));
              }}
            >
              <ArrowLeft size={25} />
            </div>
            <div className={styles.headerWrapMiddleMobile}>Giỏ Hàng</div>
            <div className={styles.headerWrapRightMobile}>Sửa</div>
          </header>
          {listProduct && listProduct.length > 0 ? (
            <div className={styles.bodyWrapMobile}>
              <div className={styles.navWrapMobile}>
                <div className={`${styles.navWrapInputMobile} ${styles.div5}`}>
                  <input type="checkbox" name="" id="" hidden />
                </div>
                <div className={styles.navWrapperMobile}>
                  <div className={`${styles.navWrapFauvoriteMobile}`}>
                    Yêu Thích
                  </div>
                  <div className={`${styles.navWrapTitleProductMobile}`}>
                    Sản Phẩm
                  </div>
                  <div
                    className={`${styles.navWrapTitleProductIconMobile} ${styles.div40}`}
                  >
                    <ChevronRight size={19} />
                  </div>
                </div>
                <div className={`${styles.navWrapTitleMobile} ${styles.div13}`}>
                  Sửa
                </div>
              </div>
              {listProduct.map((item: TCartState, index: number) => (
                <section key={index} className={styles.itemWrapMobile}>
                  <div
                    className={`${styles.itemWrapInputMobile} ${styles.div5}`}
                  >
                    {isSelectId.includes(item.id) ? (
                      <input
                        type="checkbox"
                        checked
                        onChange={() => handleCheck(item.id)}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                      />
                    )}
                  </div>
                  <div className={styles.itemWrapInformationMobile}>
                    <div
                      className={`${styles.itemWrapInfoMobile} ${styles.div40}`}
                    >
                      <img
                        src={item.imgProduct}
                        alt=""
                        className={styles.itemWrapInfoImgMobile}
                      />
                      <div className={styles.itemWrapInfoTitleMobile}>
                        <span>{item.titleProduct}</span>
                        <img
                          src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2waud2e3pbk8b"
                          alt=""
                        />
                      </div>
                      <div className={`${styles.itemWrapSelectMobile}`}>
                        <span>Phân Loại Hàng:</span>
                        <select>
                          <option value="M">M1 MIC DẢI BOX</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className={`${styles.itemWrapInfoPriceMobile} ${styles.div13}`}
                    >
                      <div className={styles.itemWrapInfoPriceNewMobile}>
                        <span>₫</span>
                        {item.priceProduct.toLocaleString("it-IT")}
                      </div>
                    </div>
                    <div
                      className={`${styles.itemWrapAmountMobile} ${styles.div13}`}
                    >
                      <div className={styles.DetailProductDivAmountMobile}>
                        <button onClick={() => handleCase("giam", item)}>
                          <NoPlus />
                        </button>
                        <input
                          type="number"
                          min={1}
                          max={999}
                          onChange={handleChangeQuality}
                          value={item.quantity}
                          name={item.titleProduct}
                          id={String(item.id)}
                          className="textbox_id"
                        />
                        <button onClick={() => handleCase("tang", item)}>
                          <Plus />
                        </button>
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
                    <input
                      type="checkbox"
                      className={styles.footerWrapMiddleInputMobile}
                    />
                    <BadgeDollarSign
                      size={17}
                      className={styles.footerWrapMiddleIconMobile}
                    />
                    <span className={styles.footerWrapMiddleSelectMobile}>
                      Bạn chưa chọn sản phẩm
                    </span>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.footerWrapMiddlePriceVoucherMobile}>
                    <ChevronRight size={19} />
                  </div>
                </div>
                <div className={styles.footerWrapBottomMobile}>
                  <div className={styles.footerWrapBottomLeftMobile}>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckAll()}
                      checked={isSelectId.length == listProduct.length}
                      id="CheckAll"
                    />
                    <label
                      htmlFor="CheckAll"
                      className={styles.footerWrapBottomLeftAll}
                    >
                      {isSelectId.length == listProduct.length
                        ? "Bỏ chọn Tất Cả"
                        : "Chọn Tất Cả"}
                    </label>
                  </div>
                  <div className={styles.footerWrapBottomRightMobile}>
                    <span className={styles.footerWrapBottomRightTotalMobile}>
                      Tổng số tiền ({countCart}) :
                    </span>
                    <div
                      className={styles.footerWrapBottomRightPriceTotalMobile}
                    >
                      <span>₫</span> {totalCart.toLocaleString("it-IT")}
                    </div>
                    <button
                      type="button"
                      className={styles.footerWrapBottomRightButtonMobile}
                      onClick={handleSubmit}
                    >
                      Thanh Toán
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className={styles.footerWrapEmptyCart}>
              <img src="/src/images/empty-cart.png" alt="" />
              <p className={styles.footerWrapEmptyCartTitle}>
                "Hổng" có gì trong giỏ hết
              </p>
              <p className={styles.footerWrapEmptyCartDescription}>
                Lướt Riche, lựa hàng ngay đi
              </p>
              <button onClick={() => navigate(Route(ROUTE_CONFIG.PRODUCT))}>
                Mua sắm ngay!
              </button>
            </div>
          )}
        </section>
      )}
      {!isPhoneScreen && (
        <>
          <section className={styles.container}>
            <header className={styles.headerWrap}>
              <div className={styles.headerWrapLeft}>
                <div>Giỏ Hàng</div>
              </div>
              <div className={styles.headerWrapRight}>
                <input
                  type="text"
                  placeholder="Tìm Kiếm"
                  name=""
                  id=""
                  ref={inputRef}
                  onChange={() => handleSearch()}
                />
                <div
                  className={styles.headerWrapRigthSearchDiv}
                  onClick={() => handleSearch()}
                >
                  <Search size={20} />
                </div>
              </div>
            </header>
            <div className={styles.bodyWrap}>
              <div className={styles.navWrap}>
                <div className={`${styles.navWrapInput} ${styles.div5}`}>
                  <input type="checkbox" name="" id="all" hidden />
                </div>
                <label
                  htmlFor="all"
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
                  Số Tiền{" "}
                </div>
                <div className={`${styles.navWrapTitle} ${styles.div13}`}>
                  Thao tác
                </div>
              </div>
              {listProduct.map((item: TCartState, index: number) => (
                <section key={index} className={styles.itemWrap}>
                  <div className={`${styles.itemWrapInput} ${styles.div5}`}>
                    <input
                      type="checkbox"
                      className="check"
                      checked={isSelectId.includes(item.id)}
                      onChange={() => handleCheck(item.id)}
                    />
                  </div>
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
                  <div
                    className={`${styles.itemWrapInfoPrice} ${styles.div13}`}
                  >
                    <div className={styles.itemWrapInfoPriceOld}>
                      <span>₫</span>
                      125.000
                    </div>
                    <div className={styles.itemWrapInfoPriceNew}>
                      <span>₫</span>
                      {item.priceProduct.toLocaleString("it-IT")}
                    </div>
                  </div>
                  <div className={`${styles.itemWrapAmount} ${styles.div13}`}>
                    <div className={styles.DetailProductDivAmount}>
                      <button onClick={() => handleCase("giam", item)}>
                        <NoPlus />
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={999}
                        onChange={handleChangeQuality}
                        value={item.quantity}
                        name={item.titleProduct}
                        id={String(item.id)}
                        className="textbox_id"
                      />
                      <button onClick={() => handleCase("tang", item)}>
                        <Plus />
                      </button>
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
                  <div className={`${styles.itemWrapHandle} ${styles.div13}`}>
                    <span onClick={() => handleDel(item.id)}>Xóa</span>

                    <div
                      className={styles.itemWrapHandleDiv}
                      onClick={() => handleAddCategory(item)}
                    >
                      <span>Tìm sản phẩm tương tự</span>
                      <ChevronDown size={17} />
                    </div>
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
                <div className={styles.footerWrapBottom}>
                  <div className={styles.footerWrapBottomLeft}>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckAll()}
                      checked={isSelectId.length == listProduct.length}
                      id="CheckAll"
                    />
                    <label
                      htmlFor="CheckAll"
                      className={styles.footerWrapBottomLeftAll}
                    >
                      {isSelectId.length == listProduct.length
                        ? "Bỏ chọn Tất Cả"
                        : "Chọn Tất Cả"}
                    </label>
                    <span
                      className={styles.footerWrapBottomLeftHandleDel}
                      onClick={() => handleDelAll()}
                    >
                      Xóa
                    </span>
                    <span className={styles.footerWrapBottomLeftSave}>
                      Lưu vào mục Đã thích
                    </span>
                  </div>
                  <div className={styles.footerWrapBottomRight}>
                    <span className={styles.footerWrapBottomRightTotal}>
                      Tổng thanh toán ({countCart} Sản phẩm):
                    </span>
                    <div className={styles.footerWrapBottomRightPriceTotal}>
                      <span>₫</span> {totalCart.toLocaleString("it-IT")}
                    </div>
                    <button
                      type="button"
                      className={styles.footerWrapBottomRightButton}
                      onClick={handleSubmit}
                    >
                      Mua Hàng
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

export { Cart };
