import { FC } from "react";
import styles from "./styles.module.scss";

const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footerContainerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.footerDiv}>
            <div className={styles.footerTitle}>DỊCH VỤ KHÁCH HÀNG</div>
            <ul className={styles.footerUl}>
              <li className={styles.footerlist}>Trung Tâm Trợ Giúp Riche</li>
              <li className={styles.footerlist}>Riche Blog</li>
              <li className={styles.footerlist}>Riche Mall</li>
              <li className={styles.footerlist}>Hướng Dẫn Mua Hàng/Đặt Hàng</li>
              <li className={styles.footerlist}>Hướng Dẫn Bán Hàng</li>
              <li className={styles.footerlist}>Ví ShopeePay</li>
              <li className={styles.footerlist}>Riche Xu</li>
              <li className={styles.footerlist}>Đơn Hàng</li>
              <li className={styles.footerlist}>Trả Hàng/Hoàn Tiền</li>
              <li className={styles.footerlist}>Liên Hệ Riche</li>
              <li className={styles.footerlist}>Chính Sách Bảo Hành</li>
            </ul>
          </div>
          <div className={styles.footerDiv}>
            <div className={styles.footerTitle}>Riche VIỆT NAM</div>
            <ul className={styles.footerUl}>
              <li className={styles.footerlist}>Về Riche</li>
              <li className={styles.footerlist}>Tuyển Dụng</li>
              <li className={styles.footerlist}>Điều Khoản Riche</li>
              <li className={styles.footerlist}>Chính Sách Bảo Mật</li>
              <li className={styles.footerlist}>Riche Mall</li>
              <li className={styles.footerlist}>Kênh Người Bán</li>
              <li className={styles.footerlist}>Flash Sale</li>
              <li className={styles.footerlist}>Tiếp Thị Liên Kết</li>
              <li className={styles.footerlist}>Liên Hệ Truyền Thông</li>
            </ul>
          </div>
          <div className={styles.footerDiv}>
            <div className={styles.footerTitle}>THANH TOÁN</div>
            <ul className={styles.footerLogoDiv}>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                  alt=""
                />
              </li>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                  alt=""
                />
              </li>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                  alt=""
                />
              </li>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
                  alt=""
                />
              </li>
            </ul>
            <div className={styles.footerTitle}>ĐƠN VỊ VẬN CHUYỂN</div>
            <ul className={styles.footerLogoDiv}>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf"
                  alt=""
                />
              </li>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6"
                  alt=""
                />
              </li>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f"
                  alt=""
                />
              </li>
              <li className={styles.footerLogo}>
                <img
                  src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className={styles.footerDiv}>
            <div className={styles.footerTitle}>THEO DÕI SHOPEE</div>
            <ul className={styles.footerUlNet}>
              <li className={styles.footerIconNet}>
                <img
                  src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                  alt=""
                />
                Facebook
              </li>
              <li className={styles.footerIconNet}>
                <img
                  src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91"
                  alt=""
                />
                Instagram
              </li>
              <li className={styles.footerIconNet}>
                <img
                  src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a"
                  alt=""
                />
                LinkedIn
              </li>
            </ul>
          </div>
          <div className={styles.footerDiv}>
            <div className={styles.footerTitle}>TẢI ỨNG DỤNG SHOPEE</div>
            <div className={styles.footerUl}>
              <div className={styles.footerIcon}>
                <div className={styles.footerLogoLeft}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                    alt=""
                  />
                </div>
                <div className={styles.footerLogoRight}>
                  <img
                    src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                    alt=""
                  />
                  <img
                    src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                    alt=""
                  />
                  <img
                    src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footerdescription}>
          <div className={styles.footerdescriptionLeft}>
            © 2024 Riche. Tất cả các quyền được bảo lưu.
          </div>
          <div className={styles.footerdescriptionRight}>
            <div className={styles.footerdescriptionRightTitle}>
              Quốc gia & Khu vực:
            </div>
            <li>Singapore</li>
            <li>Indonesia</li>
            <li>Thái Lan</li>
            <li>Malaysia</li>
            <li>Việt Nam</li>
            <li>Philippines</li>
            <li className={styles.footerdescriptionRightList}>Brazil</li>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
