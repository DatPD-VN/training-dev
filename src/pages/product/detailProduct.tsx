import styles from "./styles.module.scss";
import { Heart } from "lucide-react";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/noPlus";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Header } from "../../layouts/header/header";
import { Footer } from "../../layouts/footer/footer";
import { addCartState, newListState } from "../../recoil";
import { Toast } from "../../Common";
import { ImageItem } from "../../components/imageItem/imageItem"

function DetailProduct() {
  
  const location = useLocation();
  const newList = useRecoilValue(newListState);
  const addCart = useSetRecoilState(addCartState);
  const { id } = location.state;
  const product = newList.filter((item: any) => item.id === id);

  const handleClick = (item: any) => () => {
    const qtt = (document.querySelector("#textbox_id") as HTMLInputElement);
    let quanlity = qtt.value
    let wrapItem = { ...item, quanlity : quanlity };
    addCart(wrapItem);
    Toast();
  };
  const handleAdd = (item: any) => () => {
    let wrapItem = { ...item, quanlity: 1 };
    addCart(wrapItem);
    Toast();
  };

  const handlePlus = () => {
    const qtt = (document.querySelector("#textbox_id") as HTMLInputElement);
     (qtt.value)  = (parseInt(qtt.value) + 1).toString();
  };
  const handleNoPlus = () => {
    const qtt = (document.querySelector("#textbox_id") as HTMLInputElement);
    (qtt.value)  = (parseInt(qtt.value) - 1).toString();
  };

  return (
    <>
      <Header />
      <section className={styles.detailProductContainerWrap}>
        {product.map((item: any, index: any) => (
          <div className={styles.detailProductContainer} key={index}>
            <div className={styles.detailProductLeft}>
              <ImageItem src={item.imgProduct} />
              <div className={styles.detailProductLeftBottom}>
                <div className={styles.detailProductLeftBottomShare}>
                  <span>Chia sẻ :</span>
                  <button
                    className={styles.detailProductLeftBottomShareIcon}
                  ></button>
                  <button
                    className={styles.detailProductLeftBottomShareIcon2}
                  ></button>
                  <button
                    className={styles.detailProductLeftBottomShareIcon3}
                  ></button>
                  <button
                    className={styles.detailProductLeftBottomShareIcon4}
                  ></button>
                </div>
                <div className={styles.detailProductLeftBottomFavourite}>
                  <Heart size={20} color="red" />
                  <span>Đã thích (49,8k)</span>
                </div>
              </div>
            </div>
            <div className={styles.detailProductRight}>
              <div className={styles.detailProductRightTitleProduct}>
                {item.titleProduct}
              </div>
              <div className={styles.detailProductRightInfomation}>
                <div className={styles.detailProductRightInfomationLeft}>
                  <div className={styles.detailProductStars}>
                    <span>4.1</span>
                    <div className={styles.detailProductStar}>
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                        alt=""
                      />
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                        alt=""
                      />
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                        alt=""
                      />
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                        alt=""
                      />
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={styles.detailProductFeedback}>
                    <span>23,8k</span>
                    <p>Đánh Giá</p>
                  </div>
                  <div className={styles.detailProductSaler}>
                    <span>115,8k</span>
                    <p>Đã Bán</p>
                  </div>
                </div>
                <div className={styles.detailProductRightInfomationRight}>
                  Tố Cáo
                </div>
              </div>
              <div className={styles.detailProductPrice}>
                <div className={styles.detailProductPriceNew}>
                  <span>₫</span>
                  {item.priceProduct}
                </div>
                <div className={styles.detailProductPriceOld}>
                  <span>₫</span>
                  22.000
                </div>
                <div className={styles.detailProductPriceDiscount}>
                  {item.saleProduct}
                </div>
              </div>
              <div className={styles.detailProductTitle}>
                <div className={styles.detailProductRightTitle}>
                  Mã Giảm Giá Của Shop
                </div>
                {item.isVoucher ? (
                  <div className={styles.detailProductVoucherDetail}>
                    {item.voucherProduct}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.detailProductTitle}>
                <div className={styles.detailProductRightTitle}>
                  Chính Sách Trả Hàng
                </div>
                <div className={styles.detailProductRefund}>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b69402e4275f823f7d47.svg"
                    alt=""
                  />
                  Trả hàng 15 ngày
                </div>
                <div className={styles.detailProductRefundFree}>
                  Trả hàng miễn phí
                </div>
                <div className={styles.detailProductRefundFreeIcon}>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.detailProductTitle}>
                <div className={styles.detailProductRightTitle}>
                  Combo Khuyến Mãi
                </div>
                <div className={styles.detailProductRightVoucher}>
                  Mua 3 & giảm ₫3.000
                </div>
              </div>
              <div className={styles.detailProductTitleShip}>
                <div className={styles.detailProductRightTitle}>Vận Chuyển</div>
                <div className={styles.detailProductShip}>
                  <div className={styles.detailProductShipTop}>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                      alt=""
                    />
                    <span>Miễn Phí Vận Chuyển</span>
                  </div>
                  <div className={styles.detailProductShipBottom}>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7b101a24cfe44d8eb45f.svg"
                      alt=""
                    />
                    <span>Vận Chuyển Tới</span>
                    <select>
                      <option value="Quận Tử Liêm , Hà Nội">
                        Quận Tử Liêm , Hà Nội
                      </option>
                    </select>
                  </div>
                  <div className={styles.detailProductShipBot}>
                    <span>Phí Vận Chuyển</span>
                    <select>
                      <option value="0-36.000">₫0-₫36.000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.detailProductTitle}>
                <div className={styles.detailProductRightTitle}>Số Lượng</div>
                <div className={styles.detailProductDivAmount}>
                  <button
                    onClick={() => {
                      handleNoPlus();
                    }}
                  >
                    <NoPlus />
                  </button>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    name=""
                    id="textbox_id"
                  />
                  <button
                    onClick={() => {
                      handlePlus();
                    }}
                  >
                    <Plus />
                  </button>
                </div>
                <div className={styles.detailProductAmount}>
                  342 sản phẩm có sẵn
                </div>
              </div>
              <div className={styles.detailProductTitleButton}>
                <div
                  className={styles.detailProductTitleButtonRightTitle}
                  onClick={handleClick(item)}
                >
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                    alt=""
                  />
                  Thêm Vào Giỏ Hàng
                </div>
                <div
                  className={styles.detailProductBuy}
                  onClick={handleAdd(item)}
                >
                  Mua Hàng
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default DetailProduct;
