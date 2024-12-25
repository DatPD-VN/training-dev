import { FC } from "react";
import {
  Bell,
  ShieldQuestion,
  Globe,
  ChevronDown,
  Search,
  ShoppingCart,
  ArrowUpLeft,
} from "lucide-react";
import styles from "./styles.module.scss";
import Logo from "../../icon/logo";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { useHeader } from "./hook";
import { TCategoryState } from "../../recoil/type";

const Header: FC = () => {
  const navigate = useNavigate();
  const {
    handleNav,
    handleOpen,
    tag,
    handleChangeSearch,
    searchRef,
    inputSearch,
    isDisabled,
    listHashtag,
    handleAddHashTag,
    countCart,
    inputRef,
    userName,
    userImage,
    handleLogOut,
    list,
    handleAddCategory,
    isSearch,
    handleDrop,
    handleDragOver,
  } = useHeader();

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
          {userName && userImage ? (
            <div className={styles.divProfile}>
              <a href="" className={styles.divTagTopProfile}>
                <img
                  className={styles.imageProfile}
                  src={
                    userImage
                      ? userImage
                      : "https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo="
                  }
                  alt=""
                />
                <p className={styles.divTagTopATitleUser}>{userName} </p>
              </a>
              <div className={styles.divProfileInfo}>
                <ul>
                  <li>
                    <a href={Route(ROUTE_CONFIG.PROFILE)}>Tài Khoản Của Tôi</a>
                  </li>
                  <li>
                    <a href={Route(ROUTE_CONFIG.DATA)}>Thông Tin Sản Phẩm</a>
                  </li>
                  <li>
                    <a href={Route(ROUTE_CONFIG.CART)}>Đơn Mua</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Đăng Xuất</a>
                  </li>
                </ul>
              </div>
              <div className={styles.divProfileOverHidden}> </div>
            </div>
          ) : (
            <>
              <div className={styles.divTagTop}>
                <a
                  href={Route(ROUTE_CONFIG.LOGIN)}
                  className={styles.divTagTopA}
                >
                  <p className={styles.divTagTopATitle}>Đăng Ký </p>
                </a>
              </div>
              <div>
                <p style={{ color: "white" }}>| </p>
              </div>
              <div className={styles.divTagTop}>
                <a
                  href={Route(ROUTE_CONFIG.LOGIN)}
                  className={styles.divTagTopA}
                >
                  <p className={styles.divTagTopATitle}>Đăng Nhập </p>
                </a>
              </div>
            </>
          )}
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomLogo}>
            <div
              onClick={() => {
                handleNav();
              }}
              className={styles.headerBottomLogoDiv}
            >
              <Logo />
            </div>
          </div>
          <div className={styles.headerBottomLeft}>
            <div className={styles.divInput}>
              <input
                type="text"
                placeholder={tag ? tag : "Tìm kiếm"}
                onClick={handleOpen}
                className={styles.input}
                onChange={(e) => {
                  handleChangeSearch(e.target.value.toLowerCase());
                }}
                id="inputSearch"
                autoComplete="off"
                ref={searchRef}
              />
              <Search
                className={styles.inputIcon}
                onClick={() => {
                  inputSearch();
                }}
              />

              {!isDisabled && (
                <div className={styles.divInputSearchWrap} ref={inputRef}>
                  <ul className={styles.divInputSearch}>
                    {listHashtag.length > 0 ? (
                      listHashtag.map((item: string, index: number) => {
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              handleAddHashTag(item);
                            }}
                          >
                            {item}
                            <ArrowUpLeft color="gray" />
                          </li>
                        );
                      })
                    ) : isSearch ? (
                      <li className={styles.divInputSearchNoResult}>
                        Không tìm thấy kết quả!
                        <ArrowUpLeft color="gray" />
                      </li>
                    ) : (
                      <li className={styles.divInputSearchNoResult}>
                        Vui lòng nhập từ khóa tìm kiếm!
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.DivList}>
              {list.map((item: TCategoryState, index) => (
                <li key={index} className={styles.list}>
                  <a onClick={() => handleAddCategory(item)}>
                    {item.categoryName}
                  </a>
                </li>
              ))}
            </div>
          </div>
          <div className={styles.headerBottomRight}>
            <div
              onClick={() => {
                navigate(Route(ROUTE_CONFIG.CART));
              }}
              className={styles.headerBottomRightIconDiv}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <ShoppingCart
                size={30}
                className={styles.headerBottomRightIcon}
              />
              <div className={styles.headerBottomRightIconDivCount}>
                {countCart}
              </div>
            </div>
          </div>
          <div className={styles.headerBottomRightDivImg}>
            <div
              onClick={() => {
                navigate(Route(ROUTE_CONFIG.CART));
              }}
              className={styles.headerBottomRightIconDiv}
            >
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134226-7ras8-m18dlgfhrbq4f8_tn"
                alt=""
                className={styles.headerBottomRightImg}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
