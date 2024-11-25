import styles from "./styles.module.scss";
import {
  Bell,
  ShieldQuestion,
  Globe,
  ChevronDown,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";
import Logo from "../../icon/logo";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/noPlus";

function DetailProduct() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Bell className={styles.divTagTopIcon} />
              <p className={styles.divTagTopATitle}>Thông Báo </p>
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <ShieldQuestion className={styles.divTagTopIcon} />
              <p className={styles.divTagTopATitle}>Hỗ Trợ </p>
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Globe className={styles.divTagTopIcon} />
              <p className={styles.divTagTopATitle}>Tiếng Việt </p>
              <ChevronDown className={styles.divTagTopIcon} />
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <p className={styles.divTagTopATitle}>Đăng Ký </p>
            </a>
          </div>
          <div>
            <p style={{ color: "white" }}>| </p>
          </div>
          <div className={styles.divTagTop}>
            <a href=" " className={styles.divTagTopA}>
              <p className={styles.divTagTopATitle}>Đăng Nhập </p>
            </a>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomLogo}>
            <div className={styles.headerBottomLogoDiv}>
              <Logo/>
            </div>
          </div>
          <div className={styles.headerBottomLeft}>
            <div className={styles.divInput}>
              <input
                type="text"
                placeholder="Tìm kiếm "
                className={styles.input}
              />
              <Search className={styles.inputIcon} />
            </div>  
            <div className={styles.DivList}>
              <li className={styles.list}>
                <a href="">Dép</a>
              </li>
              <li className={styles.list}>
                <a href="">Baby Three</a>
              </li>
              <li className={styles.list}>
                <a href="">Ốp lưng</a>
              </li>
              <li className={styles.list}>
                <a href="">Áo khoác</a>
              </li>
              <li className={styles.list}>
                <a href="">Gấu Bông</a>
              </li>
              <li className={styles.list}>
                <a href="">Chân Váy</a>
              </li>
              <li className={styles.list}>
                <a href="">Váy Nữ</a>
              </li>
              <li className={styles.list}>
                <a href="">Kẹp Tóc </a>
              </li>
            </div>
          </div>
          <div className={styles.headerBottomRight}>
            <ShoppingCart size={30} className={styles.headerBottomRightIcon} />
          </div>
        </div>
      </header>
      <section className={styles.DetailProductContainerWrap}>
        <div className={styles.DetailProductContainer}>
          <div className={styles.DetailProductLeft}>
            <div className={styles.DetailProductLeftImg}>
              <img
                src="https://down-vn.img.susercontent.com/file/202cda63239ad682d5a79c9ad74abcc0@resize_w450_nl.webp"
                alt=""
              />
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
            <div className={styles.DetailProductRightTitle}>
              Body mist Xịt Thơm Toàn thân Victoria's Secret Body Mist 236ml
              Siêu Thơm Cá Tính, Năng Động
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
                22.000
              </div>
              <div className={styles.DetailProductPriceOld}>
                <span>₫</span>
                22.000
              </div>
              <div className={styles.DetailProductPriceDiscount}>-50%</div>
            </div>
            <div className={styles.DetailProductTitle}>
              <div className={styles.DetailProductRightTitle}>
                Mã Giảm Giá Của Shop
              </div>
              <div className={styles.DetailProductVoucherDetail}>Giảm ₫5k</div>
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
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7b101a24cfe44d8eb45f.svg" alt="" />
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
                <button>
                  <NoPlus/>
                </button>
                <input type="number"  value={1} name="" id="" />
                <button>
                  <Plus/>
                </button>
              </div>
              <div className={styles.DetailProductAmount}>
                342 sản phẩm có sẵn
              </div>
            </div>
            <div className={styles.DetailProductTitleButton}>
              <div className={styles.DetailProductTitleButtonRightTitle}>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                  alt=""
                />
                Thêm Vào Giỏ Hàng
              </div>
              <div className={styles.DetailProductBuy}>Mua Hàng</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailProduct;