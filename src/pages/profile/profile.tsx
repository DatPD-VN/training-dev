import { FC } from "react";
import styles from "./styles.module.scss";
import {
  BadgeDollarSign,
  BellRing,
  ChevronDown,
  ClipboardList,
  Pencil,
  Ticket,
  UserRound,
} from "lucide-react";
import New from "../../icon/new";

const Profile: FC = () => {
  return (
    <>
      <section className={styles.divProfileContainer}>
        <div className={styles.divProfileSidebar}>
          <div className={styles.divProfileSidebarInfo}>
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn"
              alt=""
            />
            <div className={styles.divProfileSidebarInfoName}>
              <p>datpham909</p>
              <div>
                <Pencil size={15} />
                <p>Sửa Hồ Sơ</p>
              </div>
            </div>
          </div>
          <div className={styles.divProfileSidebarLink}>
            <ul className={styles.containerSidebar}>
              <li>
                <img
                  src="https://down-vn.img.susercontent.com/file/sg-11134004-7rfho-m34tddanjt573a"
                  alt=""
                />
                <label>12.12 Sale Sinh Nhật</label>
                <New />
              </li>
              <li className={styles.containerSidebarUser}>
                <input type="checkbox" name="" id="profile" hidden />
                <div>
                  <UserRound color="#5a8acf" size={20} />
                  <label htmlFor="profile">Tài khoản của tôi</label>
                </div>
                <ul>
                  <li>Hồ sơ</li>
                  <li>Ngân hàng</li>
                  <li>Địa chỉ</li>
                  <li>Đổi mật khẩu</li>
                  <li>Cài đặt thông báo</li>
                  <li>Những thiết lập riêng tư</li>
                </ul>
              </li>
              <li>
                <ClipboardList color="#5a8acf" size={20} />
                <label htmlFor="">Đơn Mua</label>
              </li>
              <li className={styles.containerSidebarNotification}>
                <input type="checkbox" name="" id="notification" hidden />
                <div>
                  <BellRing color="#ff5d2c" size={20} />
                  <label htmlFor="notification">Thông báo</label>
                </div>
                <ul>
                  <li>Cập nhật đơn hàng</li>
                  <li>Khuyến mãi</li>
                  <li>Cập nhật Ví</li>
                  <li>Cập nhật Shopee</li>
                </ul>
              </li>
              <li>
                <Ticket color="#ff5b29" size={20} />
                <label htmlFor="">Kho Voucher</label>
              </li>
              <li>
                <BadgeDollarSign color="yellow" size={20} />
                <label htmlFor="">Shopee Xu</label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.divProfileContent}>
          <div className={styles.divProfileContentTitle}>
            <h1>Hồ sơ của tôi</h1>
            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          </div>
          <div className={styles.divProfileInformation}>
            <div className={styles.divProfileInformationLeft}>
              <table>
                <tr>
                  <td>
                    <label htmlFor="">Tên đăng nhập</label>
                  </td>
                  <td>
                    <div>
                      <div>
                        <input type="text" placeholder="" />
                      </div>
                      <p>Tên Đăng nhập chỉ có thể thay đổi một lần.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Tên </label>
                  </td>
                  <td>
                    <div className={styles.divProfileInformationLeftInput}>
                      <input type="text" placeholder="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Email </label>
                  </td>
                  <td>
                    <button> Thêm </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Số Điện Thoại </label>
                  </td>
                  <td>
                    <button> Thêm </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Giới Tính </label>
                  </td>
                  <td className={styles.divProfileGener}>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span>Nam</span>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span>Nữ</span>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span>Khác</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Ngày Sinh </label>
                  </td>
                  <td>
                    <div className={styles.divProfileBirthday}>
                      <section>
                        <span>Ngày</span>
                        <ChevronDown />
                      </section>
                      <section>
                        <span>Tháng</span>
                        <ChevronDown />
                      </section>
                      <section>
                        <span>Năm</span>
                        <ChevronDown />
                      </section>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className={styles.divProfileSubmit}>
                    <div className={styles.divProfileSubmitDiv}>Lưu</div>
                  </td>
                </tr>
              </table>
            </div>
            <div className={styles.divProfileInformationRight}>
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn"
                alt=""
              />
              <label htmlFor="file">Chọn Ảnh</label>
              <input type="file" name="file" id="file" hidden />
              <p>Dụng lượng file tối đa 1 MB </p>
              <p>Định dạng:.JPEG, .PNG </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Profile };
