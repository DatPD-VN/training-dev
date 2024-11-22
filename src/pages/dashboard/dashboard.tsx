import { FC } from "react";

import styles from "./styles.module.scss";
import {
  Bell,
  ShieldQuestion,
  Globe,
  ChevronDown,
  Search,
  ShoppingCart,
} from "lucide-react";

const Dashboard: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Bell className={styles.divTagTopIcon} />{" "}
              <p className={styles.divTagTopATitle}>Thông Báo </p>
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <ShieldQuestion className={styles.divTagTopIcon} />{" "}
              <p className={styles.divTagTopATitle}>Hỗ Trợ </p>
            </a>
          </div>
          <div className={styles.divTagTop}>
            <a href="" className={styles.divTagTopA}>
              <Globe className={styles.divTagTopIcon} />{" "}
              <p className={styles.divTagTopATitle}>Tiếng Việt </p>
              <ChevronDown className={styles.divTagTopIcon} />{" "}
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
                {" "}
                <a href="">Dép</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Baby Three</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Ốp lưng</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Áo khoác</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Gấu Bông</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Chân Váy</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Váy Nữ</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Kẹp Tóc </a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Giày Cao Gót</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Áo</a>{" "}
              </li>
              <li className={styles.list}>
                {" "}
                <a href="">Quần Ống Rộng</a>{" "}
              </li>
            </div>
          </div>
          <div className={styles.headerBottomRight}>
            <ShoppingCart size={30} className={styles.headerBottomRightIcon} />
          </div>
        </div>
      </header>
      <section className={styles.contaiter}>
        <div className={styles.headerWrapper}>
          
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          <div className={styles.divItemWrapper}>
            <div className={styles.divItemWrapperHover}>
              <div className={styles.divItem}>
                <div className={styles.divImg}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdxe-lyhftkuc11h341_tn.webp"
                    alt=""
                    className={styles.img}
                  />
                  <div className={styles.divItemSaleOff}>-50%</div>
                  <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m2mbjoldxw5i90"
                    alt=""
                    className={styles.logoVoucher}
                  />
                </div>
                <div className={styles.divItemTitle}>
                  Áo Thun Nam Nữ Form Rộng SIGO
                </div>
                <div className={styles.Voucher}>99% Giảm </div>

                {/* <div className={styles.WarpVoucher}>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.Voucher}>99% Giảm </div>
                  <div className={styles.TitleVoucher}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 -0.5 4 16"
                      className="flex-none h-full -mr-px"
                    >
                      <path
                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                        strokeWidth="1"
                        transform=""
                        stroke="#F69113"
                        fill="#F69113"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                <div className={styles.Price}><span className={styles.IconPrice}>₫</span>25.000</div>
              </div>
              <div className={styles.divItemHover}>
                  Tìm sản phẩm tương tự
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export { Dashboard };
