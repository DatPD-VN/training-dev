import styles from "./styles.module.scss";
import { Heart } from "lucide-react";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/noPlus";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { newListState } from "../../recoil/listState";
import { addCartState  } from "../../recoil/listCart";
import { Header } from "../../layouts/header/header";
import { Footer } from "../../layouts/footer/footer";
import { toast } from 'react-toastify';

function DetailProduct() {
  const location = useLocation();
  const newList = useRecoilValue(newListState);
  const addCart = useSetRecoilState(addCartState);
  const { id } = location.state;
  const product = newList.filter((item) => item.id === id);
  
  const handleClick = (item) => () => {
    const qtt = document.querySelectorAll('#textbox_id')[0].value;
    let wrapItem = {...item , quanlity : qtt}
    addCart(wrapItem);
    toast.success(' Thêm Thành Công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const handleAdd = (item) => () => {
    let wrapItem = {...item , quanlity : 1}
    addCart(wrapItem);
    toast.success(' Thêm Thành Công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handlePlus = () => {
    document.querySelectorAll('#textbox_id')[0].value = parseInt(document.querySelectorAll('#textbox_id')[0].value) + 1
  }
  const handleNoPlus = () => {
    document.querySelectorAll('#textbox_id')[0].value = Math.max(1 ,parseInt(document.querySelectorAll('#textbox_id')[0].value) - 1)
  }


  return (
    <>
      <Header />
      <section className={styles.DetailProductContainerWrap}>
        {product.map((item, index) => (
          <div className={styles.DetailProductContainer} key={index}>
            <div className={styles.DetailProductLeft}>
              <div className={styles.DetailProductLeftImg}>
                <img src={item.imgProduct} alt={item.titleProduct} />
              </div>
              <div className={styles.DetailProductLeftSmall}>
                <img
                  src="https://down-vn.img.susercontent.com/file/578e44d251b0dca4cb7125548b3a33f4@resize_w82_nl.webp"
                  alt=""
                />
                <img
                  src="https://down-vn.img.susercontent.com/file/a7a9bbab3d57cacd3ec527f275295baf@resize_w82_nl.webp"
                  alt=""
                />
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llsquqkxobtr32@resize_w82_nl.webp"
                  alt=""
                />
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprg2jfxgson1e@resize_w82_nl.webp"
                  alt=""
                />
                <img
                  src="https://down-vn.img.susercontent.com/file/7f75fe490929ecca18fabdb4c178b213@resize_w82_nl.webp"
                  alt=""
                />
              </div>
              <div className={styles.DetailProductLeftBottom}>
                <div className={styles.DetailProductLeftBottomShare}>
                  <span>Chia sẻ :</span>
                  <button
                    style={{ backgroundPosition: "0 -100%" }}
                    className={styles.DetailProductLeftBottomShareIcon}
                  ></button>
                  <button
                    className={styles.DetailProductLeftBottomShareIcon}
                  ></button>
                  <button
                    style={{ backgroundPosition: "0 -300%" }}
                    className={styles.DetailProductLeftBottomShareIcon}
                  ></button>
                  <button
                    style={{ backgroundPosition: "0 -400%" }}
                    className={styles.DetailProductLeftBottomShareIcon}
                  ></button>
                </div>
                <div className={styles.DetailProductLeftBottomFavourite}>
                  <Heart size={20} color="red" />
                  <span>Đã thích (49,8k)</span>
                </div>
              </div>
            </div>
            <div className={styles.DetailProductRight}>
              <div className={styles.DetailProductRightTitleProduct}>
                {item.titleProduct}
              </div>
              <div className={styles.DetailProductRightInfomation}>
                <div className={styles.DetailProductRightInfomationLeft}>
                  <div className={styles.DetailProductStars}>
                    <span>4.1</span>
                    <div className={styles.DetailProductStar}>
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
                  <div className={styles.DetailProductFeedback}>
                    <span>23,8k</span>
                    <p>Đánh Giá</p>
                  </div>
                  <div className={styles.DetailProductSaler}>
                    <span>115,8k</span>
                    <p>Đã Bán</p>
                  </div>
                </div>
                <div className={styles.DetailProductRightInfomationRight}>
                  Tố Cáo
                </div>
              </div>
              <div className={styles.DetailProductPrice}>
                <div className={styles.DetailProductPriceNew}>
                  <span>₫</span>
                  {item.priceProduct}
                </div>
                <div className={styles.DetailProductPriceOld}>
                  <span>₫</span>
                  22.000
                </div>
                <div className={styles.DetailProductPriceDiscount}>
                  {item.saleProduct}
                </div>
              </div>
              <div className={styles.DetailProductTitle}>
                <div className={styles.DetailProductRightTitle}>
                  Mã Giảm Giá Của Shop
                </div>
                {item.isVoucher ? (
                  <div className={styles.DetailProductVoucherDetail}>
                    {item.voucherProduct}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.DetailProductTitle}>
                <div className={styles.DetailProductRightTitle}>
                  Chính Sách Trả Hàng
                </div>
                <div className={styles.DetailProductRefund}>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b69402e4275f823f7d47.svg"
                    alt=""
                  />
                  Trả hàng 15 ngày
                </div>
                <div className={styles.DetailProductRefundFree}>
                  Trả hàng miễn phí
                </div>
                <div className={styles.DetailProductRefundFreeIcon}>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.DetailProductTitle}>
                <div className={styles.DetailProductRightTitle}>
                  Combo Khuyến Mãi
                </div>
                <div className={styles.DetailProductRightVoucher}>
                  Mua 3 & giảm ₫3.000
                </div>
              </div>
              <div className={styles.DetailProductTitleShip}>
                <div className={styles.DetailProductRightTitle}>Vận Chuyển</div>
                <div className={styles.DetailProductShip}>
                  <div className={styles.DetailProductShipTop}>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                      alt=""
                    />
                    <span>Miễn Phí Vận Chuyển</span>
                  </div>
                  <div className={styles.DetailProductShipBottom}>
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
                  <div className={styles.DetailProductShipBot}>
                    <span>Phí Vận Chuyển</span>
                    <select>
                      <option value="0-36.000">₫0-₫36.000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.DetailProductTitle}>
                <div className={styles.DetailProductRightTitle}>Số Lượng</div>
                <div className={styles.DetailProductDivAmount}>
                  <button onClick={() => {handleNoPlus()}}>
                    <NoPlus />
                  </button>
                  <input type="number" defaultValue={1} min={1}  name="" id="textbox_id" />
                  <button onClick={() => {handlePlus()}}>
                    <Plus />
                  </button>
                </div>
                <div className={styles.DetailProductAmount}>
                  342 sản phẩm có sẵn
                </div>
              </div>
              <div className={styles.DetailProductTitleButton}>
                <div
                  className={styles.DetailProductTitleButtonRightTitle}
                  onClick={handleClick(item)}
                >
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                    alt=""
                  />
                  Thêm Vào Giỏ Hàng
                </div>
                <div
                  className={styles.DetailProductBuy}
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
