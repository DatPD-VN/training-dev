import { FC } from "react";
import styles from "./styles.module.scss";
import { useRegister } from "./hook";
import Route, { ROUTE_CONFIG } from "../../app/route";
import Apple from "../../icon/apple";
import Google from "../../icon/google";
import Lock from "../../icon/lock";
import User from "../../icon/user";

const Register: FC = () => {
  const { isDisabled, error, handleChange, handleSubmit } = useRegister();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text2xl}>Đăng Ký</div>
          <div className={styles.headerRight}>Bạn cần giúp đỡ ? </div>
        </div>
        <section className={styles.content}>
          <form className={styles.form}>
            <div className={styles.flexColumn}>
              <label>Username </label>
            </div>
            <div className={styles.inputForm}>
              <User />
              <input
                placeholder="Enter your Username"
                className={styles.inputField}
                autoComplete="off"
                type="text"
                name="username"
                onChange={(e) => {
                  handleChange("username", e.target.value);
                }}
              />
            </div>
            {!!error && (
              <div className={styles.errorInput}>{error.username}</div>
            )}
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
            <div className={styles.flexColumn}>
              <label>Repeat Password </label>
            </div>
            <div className={styles.inputForm}>
              <Lock />
              <input
                placeholder="Enter your repeat Password"
                className={styles.inputField}
                autoComplete="off"
                type="password"
                name="repeat_password"
                onChange={(e) => {
                  handleChange("repeat_password", e.target.value);
                }}
              />
            </div>
            {!!error && (
              <div className={styles.errorInput}>{error.repeat_password}</div>
            )}
            
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isDisabled}
              className={
                !isDisabled ? styles.buttonSubmit : styles.buttonNoSubmit
              }
            >
              Sign Up
            </button>
            {!!error && <div className={styles.error}>{error.Error}</div>}
            <p className={styles.description}>
              Do have an account?{" "}
              <a href={Route(ROUTE_CONFIG.LOGIN)} className={styles.spanText}>Sign In</a>
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

export { Register };
