import { FC } from "react";
import { Facebook } from "lucide-react";
import { Volleyball } from "lucide-react";
import styles from "./styles.module.scss";
import { useLogin } from "./hook";
import Route, { ROUTE_CONFIG } from "../../app/route";

const Login: FC = () => {
  const { email, password, isDisabled, error, handleChange, handleSubmit } =
    useLogin();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text2xl}>Đăng Nhập</div>
          <div className={styles.headerRight}>Bạn cần giúp đỡ ? </div>
        </div>
        <section className={styles.content}>
          <form>
            <div className={styles.wapper}>
              <h1 className={styles.text2xl}>Đăng nhập </h1>
              <input
                type="text"
                placeholder="Email/Số Điện Thoại/Tên Đăng Nhập"
                name="email"
                className={styles.input}
                value={email}
                autoComplete="false"
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
              />
              {!!error && (
                <div className={styles.errorInput}>{error.email}</div>
              )}

              <input
                placeholder="Mật Khẩu"
                type="password"
                name="password"
                className={styles.input}
                value={password}
                autoComplete="true"
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
              />
              {!!error && (
                <div className={styles.errorInput}>{error.password}</div>
              )}
              <div className={styles.wapperTTT}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isDisabled}
                  className={
                    !isDisabled ? styles.buttonSubmit : styles.buttonNoSubmit
                  }
                >
                  ĐĂNG NHẬP
                </button>
                {!!error && <div className={styles.error}>{error.Error}</div>}
                <p className={styles.buttonSubmitPass}>
                  <a href={Route(ROUTE_CONFIG.RESETPASS)}>Quên mật khẩu</a>
                </p>
              </div>
              <div className={styles.wapperBlock}>
                <hr className={styles.wFull} />
                <span className={styles.wapprerStyleSpan}>Hoặc</span>
                <hr className={styles.wFull} />
              </div>
              <div className={styles.wapprerStyle}>
                <div className={styles.wapperButton}>
                  <Facebook size={20} className={styles.styleIcon} />{" "}
                  <span>FaceBook</span>
                </div>
                <div className={styles.wapperButton}>
                  <Volleyball size={20} className={styles.styleIcon} />
                  <span>Google</span>
                </div>
              </div>
              <div className={styles.button}>Đăng ký</div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export { Login };
