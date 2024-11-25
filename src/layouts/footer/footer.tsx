import { FC } from "react";
import styles from "./styles.module.scss";



const Footer: FC = () => {
  return <>
  <footer>
        <div className={styles.FooterContainer}>
            <div className={styles.FooterDiv}>
              <div className={styles.FooterTitle}>DỊCH VỤ KHÁCH HÀNG</div>
              <ul className={styles.FooterUl}>
                <li className={styles.Footerlist}>Trung Tâm Trợ Giúp Shopee</li>
                <li className={styles.Footerlist}>Shopee Blog</li>
                <li className={styles.Footerlist}>Shopee Mall</li>
                <li className={styles.Footerlist}>Hướng Dẫn Mua Hàng/Đặt Hàng</li>
                <li className={styles.Footerlist}>Hướng Dẫn Bán Hàng</li>
                <li className={styles.Footerlist}>Ví ShopeePay</li>
                <li className={styles.Footerlist}>Shopee Xu</li>
                <li className={styles.Footerlist}>Đơn Hàng</li>
                <li className={styles.Footerlist}>Trả Hàng/Hoàn Tiền</li>
                <li className={styles.Footerlist}>Liên Hệ Shopee</li>
                <li className={styles.Footerlist}>Chính Sách Bảo Hành</li>
              </ul> 
            </div>
            <div className={styles.FooterDiv}>
              <div className={styles.FooterTitle}>SHOPEE VIỆT NAM</div>
              <ul className={styles.FooterUl}>
                <li className={styles.Footerlist}>Về Shopee</li>
                <li className={styles.Footerlist}>Tuyển Dụng</li>
                <li className={styles.Footerlist}>Điều Khoản Shopee</li>
                <li className={styles.Footerlist}>Chính Sách Bảo Mật</li>
                <li className={styles.Footerlist}>Shopee Mall</li>
                <li className={styles.Footerlist}>Kênh Người Bán</li>
                <li className={styles.Footerlist}>Flash Sale</li>
                <li className={styles.Footerlist}>Tiếp Thị Liên Kết</li>
                <li className={styles.Footerlist}>Liên Hệ Truyền Thông</li>
              </ul> 
            </div>
            <div className={styles.FooterDiv}>
              <div className={styles.FooterTitle}>THANH TOÁN</div>
              <ul className={styles.FooterLogoDiv}>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="" />
                </li>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="" />
                </li>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="" />
                </li>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt="" />
                </li>
              </ul> 
              <div className={styles.FooterTitle}>ĐƠN VỊ VẬN CHUYỂN</div>
              <ul className={styles.FooterLogoDiv}>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf" alt="" />
                </li>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6" alt="" />
                </li>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt="" />
                </li>
                <li className={styles.FooterLogo}>
                  <img  src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" alt="" />
                </li>
              </ul> 
            </div>
            <div className={styles.FooterDiv}>
              <div className={styles.FooterTitle}>THEO DÕI SHOPEE</div>
              <ul className={styles.FooterUl}>
                <li className={styles.FooterIcon}>
                  <img src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5" alt="" />
                  Facebook</li>
                <li className={styles.FooterIcon}>
                   <img src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91" alt="" />
                   Instagram</li>
                <li className={styles.FooterIcon}>
                   <img src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a" alt="" />
                   LinkedIn</li>
                
              </ul> 
            </div>
            <div className={styles.FooterDiv}>
              <div className={styles.FooterTitle}>TẢI ỨNG DỤNG SHOPEE</div>
              <ul className={styles.FooterUl}>
                <li className={styles.FooterIcon}>
                  <div className={styles.FooterLogoLeft}>
                    <img src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" alt="" />
                  </div>
                  <div className={styles.FooterLogoRight}>
                    <img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" alt="" />
                    <img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" alt="" />
                    <img src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" alt="" />
                  </div>
                </li>
              </ul> 
            </div>
        </div>
        <hr />
        <div className={styles.Footerdescription}>
          <div className={styles.FooterdescriptionLeft}>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className={styles.FooterdescriptionRight}>
            <div className={styles.FooterdescriptionRightTitle}>Quốc gia & Khu vực:</div>
            <li >Singapore</li>
            <li>Indonesia</li>
            <li>Thái Lan</li>
            <li>Malaysia</li>
            <li>Việt Nam</li>
            <li>Philippines</li>
            <li className={styles.FooterdescriptionRightList}>Brazil</li>
          </div>
        </div>
      </footer>
  </>;
};

export { Footer };
