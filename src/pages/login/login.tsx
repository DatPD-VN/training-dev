import { FC } from "react";
import styles from "./styles.module.scss";
import { useLogin } from "./hook";
import Route, { ROUTE_CONFIG } from "../../app/route";
import Apple from "../../icon/apple";
import Google from "../../icon/google";
import Lock from "../../icon/lock";
import User from "../../icon/user";

const Login: FC = () => {
  const { isDisabled, error, handleChange, handleSubmit } = useLogin();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text2xl}>Đăng Nhập</div>
          <div className={styles.headerRight}>Bạn cần giúp đỡ ? </div>
        </div>
        <section className={styles.content}>
          <form className={styles.form}>
            <div className={styles.flexColumn}>
              <label>Email </label>
            </div>
            <div className={styles.inputForm}>
              <User />
              <input
                placeholder="Enter your Email"
                className={styles.inputField}
                autoComplete="off"
                type="text"
                name="email"
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
              />
            </div>
            {!!error && <div className={styles.errorInput}>{error.email}</div>}

            <div className={styles.flexColumn}>
              <label>Password </label>
            </div>
            <div className={styles.inputForm}>
              <Lock />
              <input
                placeholder="Enter your Password"
                className={styles.inputField}
                autoComplete="off"
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
              />
            </div>
            {!!error && (
              <div className={styles.errorInput}>{error.password}</div>
            )}
            <div className={styles.flexRow}>
              <div>
                <input type="radio" />
                <label>Remember me </label>
              </div>
              <a
                href={Route(ROUTE_CONFIG.RESETPASS)}
                className={styles.spanText}
              >
                Forgot password?
              </a>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isDisabled}
              className={
                !isDisabled ? styles.buttonSubmit : styles.buttonNoSubmit
              }
            >
              Sign In
            </button>
            {!!error && <div className={styles.error}>{error.Error}</div>}
            <p className={styles.description}>
              Don't have an account?{" "}
              <span className={styles.spanText}>Sign Up</span>
            </p>
            <p className={styles.description}>Or With</p>

            <div className={styles.flexRow}>
              <button className={styles.buttonIcon}>
                <Google />
                Google
              </button>
              <button className={styles.buttonIcon}>
                <Apple />
                Apple
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export { Login };
