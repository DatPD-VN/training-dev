import { FC } from "react";
import styles from "./styles.module.scss";
import {
  BadgeDollarSign,
  BellRing,
  ClipboardList,
  Pencil,
  Ticket,
  UserRound,
} from "lucide-react";
import New from "../../icon/new";
import { useProfile } from "./hook";
import Dropdown from "../../components/dropdown/drop-down";

const Profile: FC = () => {
  const {
    handleImageChange,
    handleChange,
    handleDelete,
    handleChangeGender,
    handleSubmit,
    profileData,
    isActiveNumber,
    isActiveEmail,
    successMessage,
    handleChangeBirthday,
    errorMessageUploadFile,
  } = useProfile();
  return (
    <>
      <section className={styles.divProfileContainer}>
        <div className={styles.divProfileSidebar}>
          <div className={styles.divProfileSidebarInfo}>
            <img
              src={
                (profileData.image as string)
                  ? (profileData.image as string)
                  : "https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn"
              }
              alt=""
            />
            <div className={styles.divProfileSidebarInfoName}>
              <p>{profileData.email}</p>
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
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="">Tên đăng nhập</label>
                    </td>
                    <td>
                      <div>
                        <div>
                          <input
                            type="text"
                            placeholder=""
                            defaultValue={profileData.userName ?? ""}
                            name="userName"
                            onChange={handleChange}
                            autoComplete="off"
                          />
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
                        <input
                          type="text"
                          placeholder=""
                          name="fullName"
                          defaultValue={profileData.fullName ?? ""}
                          autoComplete="off"
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="">Email </label>
                    </td>
                    <td>
                      {!isActiveEmail ? (
                        <div className={styles.divProfileInformationLeftInput}>
                          <input
                            type="text"
                            placeholder=""
                            name="email"
                            defaultValue={profileData.email ?? ""}
                            autoComplete="off"
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <section>
                          <span>{profileData.email}</span>
                          <button onClick={() => handleDelete("email")}>
                            Xóa
                          </button>
                        </section>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="">Số Điện Thoại </label>
                    </td>
                    <td>
                      {!isActiveNumber ? (
                        <div className={styles.divProfileInformationLeftInput}>
                          <input
                            type="text"
                            placeholder=""
                            name="numberPhone"
                            defaultValue={profileData.numberPhone ?? ""}
                            autoComplete="off"
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <section>
                          <span>{profileData.numberPhone}</span>
                          <button onClick={() => handleDelete("numberPhone")}>
                            Xóa
                          </button>
                        </section>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="">Giới Tính </label>
                    </td>
                    <td className={styles.divProfileGener}>
                      {["Nam", "Nữ", "Khác"].map((label) => (
                        <div key={label}>
                          <input
                            key={label}
                            type="checkbox"
                            name=""
                            id="male"
                            checked={profileData.gender === label}
                            onChange={() => handleChangeGender(label)}
                          />
                          <label
                            className={styles.divProfileGenreLabel}
                            htmlFor="male"
                          >
                            {label}
                          </label>
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="">Ngày Sinh </label>
                    </td>
                    <td>
                      <div className={`${styles.divProfileBirthday} `}>
                        <Dropdown
                          name="birthDay"
                          title="Ngày"
                          data={Array.from({ length: 31 }, (_, i) => ({
                            value: i + 1,
                          }))}
                          onSelect={handleChangeBirthday}
                        />
                        <Dropdown
                          name="birthMonth"
                          title="Tháng"
                          data={Array.from({ length: 12 }, (_, i) => ({
                            value: i + 1,
                          }))}
                          onSelect={handleChangeBirthday}
                        />
                        <Dropdown
                          name="birthYear"
                          title="Năm"
                          data={Array.from({ length: 100 }, (_, i) => ({
                            value: 2024 - i,
                          }))}
                          onSelect={handleChangeBirthday}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className={styles.divProfileSubmit}>
                      <div className={styles.divProfileSubmitMessage}>
                        {successMessage}
                      </div>
                      <div
                        className={styles.divProfileSubmitDiv}
                        onClick={handleSubmit}
                      >
                        Lưu
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.divProfileInformationRight}>
              <img
                src={
                  profileData.image
                    ? (profileData.image as string)
                    : "https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn"
                }
                alt=""
              />
              <label htmlFor="file">Chọn Ảnh</label>
              <p className={styles.divProfileInformationRightUploadFile}>
                {errorMessageUploadFile ?? ""}
              </p>
              <input
                type="file"
                name="file"
                id="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
              <p>Dụng lượng file tối đa 1 MB </p>
              <p>Định dạng:.JPEG, .PNG .JPG </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Profile };
