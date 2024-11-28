import styles from "./styles.module.scss";
import mobile from "./mobile.module.scss";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Ellipsis,
  Heart,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/noPlus";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Header } from "../../layouts/header/header";
import { Footer } from "../../layouts/footer/footer";
import { addCartState, newListState } from "../../recoil";
import { Toast } from "../../Common";
import { ImageItem } from "../../components/imageItem/imageItem";
import { useMediaQuery } from "react-responsive";
import { FeedBack } from "../../components/feedback/feedBack";

function DetailProduct() {
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const location = useLocation();
  const newList = useRecoilValue(newListState);
  const addCart = useSetRecoilState(addCartState);
  const { id } = location.state;
  const product = newList.filter((item: any) => item.id === id);

  const handleClick = (item: any) => () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    let quanlity = qtt.value;
    let wrapItem = { ...item, quanlity: quanlity };
    addCart(wrapItem);
    Toast();
  };
  const handleAdd = (item: any) => () => {
    let wrapItem = { ...item, quanlity: 1 };
    addCart(wrapItem);
    Toast();
  };

  const handlePlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    qtt.value = (parseInt(qtt.value) + 1).toString();
  };
  const handleNoPlus = () => {
    const qtt = document.querySelector("#textbox_id") as HTMLInputElement;
    qtt.value = (parseInt(qtt.value) - 1).toString();
  };

  return (
    <>
      {/* <Header /> */}

      {/* <section className={styles.detailProductContainerWrap}>
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
      </section> */}
      <section className={mobile.containerDetail}>
        <header className={mobile.headerWrap}>
          <div className={mobile.headerWrapLeft}>
             <ArrowLeft size={25} />
          </div>
          <div className={mobile.headerWrapMiddle}>
            Sáp vuốt tóc BluMaan Styling Meraki (sáp tê giác) tạo kiểu giữ nếp
            cả ngày, không bết Minh Anh Hair Store
          </div>
          <div className={mobile.headerWrapRight}>
            <div className={mobile.headerWrapRightCart}>
              <ShoppingCart size={23} />
              <div className={mobile.headerWrapRightCartAmount}>1</div>
            </div>
            <div className={mobile.headerWrapRightEllipsis}>
              <Ellipsis  size={23}/>
            </div>
          </div>
        </header>
        <div className={mobile.imgProductWrap}>
          <div className={mobile.imgProduct}>
            <img
              className={mobile.imgProductWrapMain}
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzgiw8bdfuj1c0.webp"
              alt=""
            />
            <img
              className={mobile.imgProductWrapVoucher}
              src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2w9lkghn9h62b"
              alt=""
            />
          </div>
          <p>2 phân loại có sẵn</p>
          <div className={mobile.imgProductWrapSelect}>
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
        <div className={mobile.flashSale}>
          <img src="https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/productdetailspage/8dbf303bff17e5d41618.svg" alt="" />
        </div>
        <div className={mobile.priceWrap}>
          <div className={mobile.priceWrapInfo}>
            <div className={mobile.priceWrapMain}>
              <div className={mobile.priceWrapMainNew}>
                <span className="">₫</span>
                <p className="">9.000</p>
              </div>
              <div className={mobile.priceWrapMainOld}>
                <span className="">₫</span>
                <p className="">129.000</p>
              </div>
            </div>
            <div className={mobile.heartDiv}>
              <span>4,3k Đã bán</span>
              <Heart  size={18}/>
            </div>  
          </div>
          <div className={mobile.priceWrapVoucher}>
            <div>Mua tối thiểu ₫100k để được giảm ₫3k</div>
            <ChevronRight size={18} />
          </div>
        </div>
        <div className={mobile.titleProduct}>
          
          <p className={mobile.titleProductMain}>
          <span className={mobile.titleProductHeart}>Yêu thích </span>
            Sáp vuốt tóc BluMaan Styling Meraki (sáp tê giác) tạo kiểu giữ nếp
            cả ngày, không bết Minh Anh Hair Store
          </p>
        </div>
        <div className={mobile.shipWrap}>
          <div className={mobile.shipWrapLeft}>
            <Truck size={15} color="#61f5a1"/>
            <div  className={mobile.shipWrapLeftInfo}>
              <p>Nhận từ 1 Th12 - 2 Th12, phí giao ₫0</p>
              <p>Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</p>
            </div>
          </div>
          <div className={mobile.shipWrapRight}>
            <ChevronRight  size={15}/>
          </div>
        </div>
        <div className={mobile.shipTimeWrap}>
          <div className={mobile.shipTime}>
            <ShieldCheck size={15} color="red" />
            <div>
              <p>Trả hàng miễn phí 15 ngày</p>
            </div>
          </div>
          <div className={mobile.shipTimeWrapRight}>
            <ChevronRight  size={15}/>
          </div>
        </div>
        <div className={mobile.infoShopWrapper}>
          <div className={mobile.infoShopWrap}>
            <div className={mobile.infoShop}>
              <div className={mobile.infoShopWrapper}>
                <div className={mobile.infoShopWrapperLeft}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/4ad311e72dd00622dfa2da623b3a7961_tn"
                    alt=""
                  />
                  <span>Yêu thích</span>
                </div>
                <div className={mobile.infoShopWrapperRight}>
                  <p className={mobile.infoShopWrapperRightName}>Minh Anh Hair Store 19</p>
                  <p className={mobile.infoShopWrapperRightInfo}>Online 16 phút trước</p>
                  <div className={mobile.infoShopWrapperRightAddress}>
                    <MapPin size={12} /> <span>Hà Nội</span>
                  </div>
                </div>
                <button>Xem Shop</button>
              </div>
            </div>
            <div className={mobile.infoSocial}>
              <div className={mobile.infoSocialDiv}>
                <span>129</span>
                Sản phẩm
              </div>
              <div className={mobile.infoSocialDiv}>
                <span>129</span>
                Đánh giá
              </div>
              <div className={mobile.infoSocialDiv}>
                <span>129</span>
                Phản hồi Chat
              </div>
            </div>
          </div>
        </div>
        
        <section>
          <div>
            <div>Chi tiết sản phẩm</div>
            <div>
              Số lượng hàng khuyến mãi,Số sản phẩm còn lại <ChevronRight />
            </div>
          </div>
          <div>
            <p>Mô tả sản phẩm</p>
            <p>
              Sáp vuốt tóc BluMaan Styling Meraki (sáp tê giác) tạo kiểu giữ nếp
              cả ngày, không bết Minh Anh Hair Store BluMaan Styling Meraki Tê
              Giác là một sản phẩm tạo kiểu tóc hoàn hảo, được thực hiện bởi Joe
              và cộng đồng Blumaan. Hỗ trợ mạnh mẽ mái tóc của bạn cả ngày,
              không có gì có thể ngăn cản kiểu tóc của bạn trong các hoạt động
              hàng ngày. Styling Meraki có một kết thúc mờ, trông như thể không
              có gì trong mái tóc của bạn, tạo cho bạn một cái nhìn tự nhiên
              Công dụng BluMaan Styling Meraki: - Giữ nếp cực kỳ cao ( High Hold
              ) - Hoàn thiện mờ ( Matte finish ) - Trong sáp có thành phần bảo
              vệ tóc khỏi nhiệt độ cao của máy sấy. - Chất sáp mềm dễ dàng tạo
              kiểu khi vuốt nếp - Không bóng, không bết, - Dễ dàng tạo kiểu lại
              khi đội mũ bảo hiểm - Dễ gội đầu sau khi sử dụng, không bị rít tóc
              - Sản phẩm có chất giữ ẩm và dưỡng tóc - Phù hợp với mọi loại tóc
              ***THÀNH PHẦN: Nước (aqua), Petrolatum, Cera Microcristallina,
              Paraffinum Liquidum, Ozokerite, Stearic Acid, Phenyl Trimethicone,
              Kaolin, Silica, Metha Piperita Oil, Parfum, Linalool. D-limonene,
              Illicium Verum Fruit Oil. Cl77499/Iron Oxides, Tribehenin,
              Oleylalcohol, Lanolin, Lanolin Alcohol. Sản phẩm không sử dụng
              chất bảo quản (No Parabens) #sapvuottoc #sapvuottocnam
              #waxvuottocnam #gomsapvuottocnam #xapvuottoc #taokieutoc
              #giuneptoc #sapvuottockho #saptocnam #keosapvuottoc #blumaan
              #blumaantegiac #blumaannguavan #blumaankhidot
            </p>
          </div>
          <div>
            <div>
              Xem Thêm
              <ChevronDown />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <div>
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
              <p>ĐÁNH GIÁ SẢN PHẨM</p>
              <div>
                <span>5.0/5</span>
                <span>(17 Đánh Giá)</span>
              </div>
            </div>
            <div>
              Xem Tất Cả <ChevronRight/>
            </div>
          </div>
          <FeedBack/>
          <div>
            Xem Tất Cả (17) <ChevronRight/>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default DetailProduct;
