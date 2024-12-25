import styles from "./styles.module.scss";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Ellipsis,
  Heart,
  MapPin,
  MessageCircleMore,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Plus from "../../../icon/plus";
import NoPlus from "../../../icon/no-plus";
import { ImageItem } from "../../../components/image-item/image-item";
import { FeedBack } from "../../../components/feed-back/feed-back";
import { useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../../app/route";
import { useDetailProduct } from "./hook";
import { TDataState } from "../../../recoil/type";
import FlashSale from "../../../components/flash-sale/flash-sale";
import { FLASH_SALE } from "../../../const";

function DetailProduct() {
  const navigate = useNavigate();
  const {
    isPhoneScreen,
    countCart,
    product,
    handleAddProduct,
    handleNoPlus,
    handlePlus,
    handleClick,
    handleChangeQuality,
  } = useDetailProduct();

  return (
    <>
      {isPhoneScreen && (
        <section className={styles.containerDetail}>
          <header className={styles.headerWrap}>
            <div
              className={styles.headerWrapLeft}
              onClick={() => {
                navigate(Route(ROUTE_CONFIG.PRODUCT));
              }}
            >
              <ArrowLeft size={25} />
            </div>
            <div className={styles.headerWrapMiddle}>
              Sáp vuốt tóc BluMaan Styling Meraki (sáp tê giác) tạo kiểu giữ nếp
              cả ngày, không bết Minh Anh Hair Store
            </div>
            <div className={styles.headerWrapRight}>
              <div
                className={styles.headerWrapRightCart}
                onClick={() => {
                  navigate(Route(ROUTE_CONFIG.CART));
                }}
              >
                <ShoppingCart size={23} />
                <div className={styles.headerWrapRightCartAmount}>
                  {countCart}
                </div>
              </div>
              <div className={styles.headerWrapRightEllipsis}>
                <Ellipsis size={23} />
              </div>
            </div>
          </header>
          {product.map((item: TDataState, index: number) => (
            <div key={index}>
              <div className={styles.imgProductWrap}>
                <div className={styles.imgProduct}>
                  <img
                    className={styles.imgProductWrapMain}
                    src={item.imgProduct}
                    alt=""
                  />
                  <img
                    className={styles.imgProductWrapVoucher}
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2w9lkghn9h62b"
                    alt=""
                  />
                </div>
                <p>2 phân loại có sẵn</p>
                <div className={styles.imgProductWrapSelect}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzgip241agf5e5@resize_w264_nl.webp"
                    alt=""
                  />
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzgipe7xkkel4c@resize_w264_nl.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.flashSale}>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/productdetailspage/8dbf303bff17e5d41618.svg"
                  alt=""
                />
              </div>
              <div className={styles.priceWrap}>
                <div className={styles.priceWrapInfo}>
                  <div className={styles.priceWrapMain}>
                    <div className={styles.priceWrapMainNew}>
                      <span className="">₫</span>
                      <p className="">
                        {item.priceProduct.toLocaleString("it-IT")}
                      </p>
                    </div>
                    <div className={styles.priceWrapMainOld}>
                      <span className="">₫</span>
                      <p className="">129.000</p>
                    </div>
                  </div>
                  <div className={styles.heartDiv}>
                    <span>4,3k Đã bán</span>
                    <Heart size={18} />
                  </div>
                </div>
                <div className={styles.priceWrapVoucher}>
                  <div>Mua tối thiểu ₫100k để được giảm ₫3k</div>
                  <ChevronRight size={18} />
                </div>
              </div>
              <div className={styles.titleProduct}>
                <p className={styles.titleProductMain}>
                  <span className={styles.titleProductHeart}>Yêu thích </span>
                  {item.titleProduct}
                </p>
              </div>
              <div className={styles.shipWrap}>
                <div className={styles.shipWrapLeft}>
                  <Truck size={15} color="#61f5a1" />
                  <div className={styles.shipWrapLeftInfo}>
                    <p>Nhận từ 1 Th12 - 2 Th12, phí giao ₫0</p>
                    <p>Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</p>
                  </div>
                </div>
                <div className={styles.shipWrapRight}>
                  <ChevronRight size={15} />
                </div>
              </div>
              <div className={styles.shipTimeWrap}>
                <div className={styles.shipTime}>
                  <ShieldCheck size={15} color="red" />
                  <div>
                    <p>Trả hàng miễn phí 15 ngày</p>
                  </div>
                </div>
                <div className={styles.shipTimeWrapRight}>
                  <ChevronRight size={15} />
                </div>
              </div>
              <div className={styles.infoShopWrapper}>
                <div className={styles.infoShopWrap}>
                  <div className={styles.infoShop}>
                    <div className={styles.infoShopWrapper}>
                      <div className={styles.infoShopWrapperLeft}>
                        <img
                          src="https://down-vn.img.susercontent.com/file/4ad311e72dd00622dfa2da623b3a7961_tn"
                          alt=""
                        />
                        <span>Yêu thích</span>
                      </div>
                      <div className={styles.infoShopWrapperRight}>
                        <p className={styles.infoShopWrapperRightName}>
                          Minh Anh Hair Store 19
                        </p>
                        <p className={styles.infoShopWrapperRightInfo}>
                          Online 16 phút trước
                        </p>
                        <div className={styles.infoShopWrapperRightAddress}>
                          <MapPin size={12} /> <span>Hà Nội</span>
                        </div>
                      </div>
                      <button>Xem Shop</button>
                    </div>
                  </div>
                  <div className={styles.infoSocial}>
                    <div className={styles.infoSocialDiv}>
                      <span>129</span>
                      Sản phẩm
                    </div>
                    <div className={styles.infoSocialDiv}>
                      <span>129</span>
                      Đánh giá
                    </div>
                    <div className={styles.infoSocialDiv}>
                      <span>129</span>
                      Phản hồi Chat
                    </div>
                  </div>
                </div>
              </div>

              <section className={styles.infoProductWrapper}>
                <div className={styles.infoProductTitle}>
                  <div className={styles.infoProductTitleLeft}>
                    Chi tiết sản phẩm
                  </div>
                  <div className={styles.infoProductTitleRight}>
                    Số lượng hàng khuyến mãi,Số sản phẩm còn lại{" "}
                    <ChevronRight />
                  </div>
                </div>
                <div className={styles.infoProductDescription}>
                  <p className={styles.infoProductDescriptionTitle}>
                    Mô tả sản phẩm
                  </p>
                  <p className={styles.infoProductDescriptionMain}>
                    [ Chính Hãng ] Combo Sáp vuốt tóc Menitems Styling
                    Clay/Styling Pomade - Sáp dưỡng, tạo kiểu tự nhiên, giữ nếp
                    siêu cấp, hương nước hoa lôi cuốn - Tặng lược ✪ Menitems là
                    thương hiệu mới ở Việt Nam với dòng sản phẩm chính là Sáp
                    vuốt tóc Menitems. Với mong muốn trở thành lựa chọn uy tín,
                    chất lượng và hiệu quả trong lĩnh vực chăm sóc, làm đẹp của
                    nam giới. ✪ Công dụng Sáp dưỡng tạo kiểu Menitems - Giúp
                    thay đổi vẻ ngoài của mái tóc. - Giúp giữ nếp, tạo độ phồng,
                    tạo độ bóng mờ cho tóc. - Giúp giữ độ ẩm cho tóc hỗ trợ và
                    giúp tóc khỏe hơn. - Sáp dưỡng tạo kiểu tóc - Sáp tóc hương
                    nước hoa - Sáp tóc giữ nếp 16 giờ - Công thức Pomade gốc
                    nước giúp dễ dàng gội sạch 100% - Mùi hương sáp dưỡng tạo
                    kiểu Menitems: gồm 2 mùi hương + Tropical Wind: Hương thanh
                    mát, dịu nhẹ phù hợp cho đi làm, đi chơi, thường xuyên di
                    chuyển ngoài trời + Perfect Night: Trầm ấm, tạo điểm thu
                    hút, phù hợp hơn các bữa tiệc hoặc đi chơi, tạo ấn tượng cho
                    người đối diện ✪ Công dụng Sáp MENITEMS Clay - Gentle Blue:
                    - Giúp thay đổi vẻ ngoài của mái tóc - Giúp giữ nếp, tạo độ
                    phồng, tạo độ bóng mờ cho tóc - Giúp giữ độ ẩm cho tóc hỗ
                    trợ và giúp tóc khỏe hơn - Sáp dưỡng tạo kiểu tóc - Sáp tóc
                    hương nước hoa lôi cuốn - Sáp tóc giữ nếp 10 giờ - Khả năng
                    re-style ấn tượng với mũ bảo hiểm - Mùi hương sáp dưỡng tạo
                    kiểu Menitems Clay - Gentle Blue: hương thơm lịch lãm với 3
                    tầng hương nước hoa, nổi bật với tông trầm ấm, bí ẩn. 2.
                    Thành phần Sáp dưỡng tạo kiểu Menitems - Thành phần nổi bật:
                    Chứa các thành phần dưỡng chất tinh dầu jojoba và vitamin b3
                    giúp chắc khỏe và mượt tóc Kaolin, Water,
                    Cyclopentasiloxane, Cera Alba, Polysorbate 80, Copernicia
                    Cerifera (Carnauba) Wax, PVP, PEG-40 Hydrogenated Castor
                    Oil, Polysorbate 20, Magnesium Stearate, Fragrance, Glyceryl
                    Stearate, Propylene Glycol, Butyrospermum Parkii (Shea)
                    Butter, Lanolin, Olea Europaea (Olive) Fruit Oil,
                    Ceteareth-20, Ceteareth-12, Cetearyl Alcohol, Cetyl
                    Palmitate, Panthenol, Niacinamide, Argania Spinosa Kernel
                    Oil, Prunus Dulcis (Almond) Oil, Lavandula Angustifolia
                    (Lavender) Flower Extract, Camellia Sinensis Leaf Extract,
                    1,2-Hexanediol, Butylene Glycol, Phenoxyethanol, Cetrimonium
                    Chloride, Ethylhexylglycerin. 3. Cách dùng Sáp dưỡng tạo
                    kiểu Menitems - Bước 1: Lấy một lượng sáp vừa đủ, đánh tan
                    trong lòng bàn tay. - Bước 2: Để tóc khô rồi vuốt đều lên
                    tóc, bắt đầu vuốt từ gần chân tóc dần đến ngọn tóc để sản
                    phẩm tan và trải đều trên tóc. - Kết hợp sử dụng lược và máy
                    sấy để tạo kiểu tóc như ý muốn. DP COSMECTIC CAM KẾT: ▶️ Sản
                    phẩm 100% giống mô tả ▶️ Cam kết hàng chính hãng 100% ▶️
                    Hoàn lại tiền nếu phát hiện hàng giả - nhái ▶️ Chế độ hoàn
                    tiền trong 5 phút ▶️ Giao hàng ngay khi nhận được đơn từ
                    khách đặt
                  </p>
                </div>
                <div className={styles.infoProductBottom}>
                  <div>
                    Xem Thêm
                    <ChevronDown size={15} />
                  </div>
                </div>
              </section>
              <section className={styles.feedBackWrap}>
                <div className={styles.feedBackWrapTitle}>
                  <div className={styles.feedBackWrapTitleLeft}>
                    <p className={styles.feedBackWrapTitleLeftTitle}>
                      Đánh Giá Sản Phẩm
                    </p>
                    <div className={styles.feedBackWrapTitleLeftInfo}>
                      <div className={styles.feedBackWrapTitleLeftStar}>
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
                      <span className={styles.feedBackWrapTitleAmountStar}>
                        5.0/5
                      </span>
                      <span className={styles.feedBackWrapTitleLeftFeedback}>
                        (17 Đánh Giá)
                      </span>
                    </div>
                  </div>
                  <div className={styles.feedBackWrapTitleRight}>
                    Xem Tất Cả <ChevronRight size={15} />
                  </div>
                </div>
                <FeedBack />
                <FeedBack />
                <div className={styles.feedBackWrapBottom}>
                  Xem Tất Cả (17) <ChevronRight size={18} />
                </div>
              </section>
              <footer>
                <div className={styles.footerContainer}>
                  <div className={styles.footerDiv}>
                    <MessageCircleMore size={20} />
                    <span>Chat Ngay</span>
                  </div>
                  <div className={styles.footerDiv}>
                    <MessageCircleMore size={20} />
                    <span onClick={() => handleAddProduct(item)}>
                      Thêm vào Giỏ hàng
                    </span>
                  </div>
                  <div className={styles.footerButtonBuy}>
                    <span onClick={() => handleAddProduct(item)}>Mua ngay</span>
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </section>
      )}
      {!isPhoneScreen && (
        <>
          <section className={styles.detailProductContainerWrap}>
            {product.map((item: TDataState, index: number) => (
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
                      {item.priceProduct.toLocaleString("it-IT")}
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
                    <div className={styles.detailProductRightTitle}>
                      Vận Chuyển
                    </div>
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
                    <FlashSale time={FLASH_SALE} />
                  </div>
                  <div className={styles.detailProductTitle}>
                    <div className={styles.detailProductRightTitle}>
                      Số Lượng
                    </div>
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
                        onChange={handleChangeQuality}
                        min={1}
                        max={999}
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
                      onClick={() => handleClick(item)}
                    >
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                        alt=""
                      />
                      Thêm Vào Giỏ Hàng
                    </div>
                    <div
                      className={styles.detailProductBuy}
                      onClick={() => handleAddProduct(item)}
                    >
                      Mua Hàng
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default DetailProduct;
