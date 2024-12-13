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
              <p>{profileData.userName}</p>
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
                        <input
                          type="text"
                          placeholder=""
                          defaultValue={
                            profileData.userName ? profileData.userName : ""
                          }
                          name="userName"
                          onChange={handleChange}
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
                        defaultValue={
                          profileData.fullName ? profileData.fullName : ""
                        }
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
                          defaultValue={
                            profileData.email ? profileData.email : ""
                          }
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <section>
                        <span>{profileData.email}</span>
                        <button onClick={() => handleDelete("email")}>
                          {" "}
                          Xóa{" "}
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
                          defaultValue={
                            profileData.numberPhone
                              ? profileData.numberPhone
                              : ""
                          }
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <section>
                        <span>{profileData.numberPhone}</span>
                        <button onClick={() => handleDelete("numberPhone")}>
                          {" "}
                          Xóa{" "}
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
                      <div>
                        <input
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
                    <div className={styles.divProfileBirthday}>
                      {["Ngày", "Tháng", "Năm"].map((label, index) => (
                        <select
                          id="day"
                          value={
                            index === 0
                              ? profileData.birthDay
                              : index === 1
                              ? profileData.birthMonth
                              : profileData.birthYear
                          }
                          name={
                            index === 0
                              ? "birthDay"
                              : index === 1
                              ? "birthMonth"
                              : "birthYear"
                          }
                          onChange={handleChange}
                          key={label}
                        >
                          {" "}
                          {[
                            ...(index === 0
                              ? Array(31)
                              : index === 1
                              ? Array(12)
                              : Array(100)),
                          ].map((_, i) => (
                            <option
                              key={i}
                              value={index === 2 ? 2024 - i : i + 1}
                            >
                              {index === 2 ? 2024 - i : i + 1}
                            </option>
                          ))}
                        </select>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className={styles.divProfileSubmit}>
                    <div
                      className={styles.divProfileSubmitDiv}
                      onClick={handleSubmit}
                    >
                      Lưu
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className={styles.divProfileInformationRight}>
              <img
                src={
                  (profileData.image as string)
                    ? (profileData.image as string)
                    : "https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn"
                }
                alt=""
              />
              <label htmlFor="file">Chọn Ảnh</label>
              <input
                type="file"
                name="file"
                id="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
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
