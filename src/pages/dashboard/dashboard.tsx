import { FC } from "react";

import styles from "./styles.module.scss";
import { Bell ,ShieldQuestion,Globe ,ChevronDown    } from "lucide-react";

const Dashboard: FC = () => {
  return (
    <>
      <header>
        <div>
          <div >
            <a href="">
              <Bell />{" "}
              <p>Thông Báo </p>
            </a>
          </div>
          <div >
            <a href="">
              <ShieldQuestion />{" "}
              <p>Hỗ Trợ </p>
            </a>
          </div>
          <div >
            <a href="">
              <Globe />{" "}
              <p>Tiếng Việt </p>
              <ChevronDown />{" "}

            </a>
          </div>
          <div >
            <a href="">
              <p>Đăng Ký </p>
              <Bell />{" "}
            </a>
          </div>
          <div >
              <p>| </p>
          </div>
          <div >
            <a href="">
              <p>Đăng Nhập </p>
              <Bell />{" "}
            </a>
          </div>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Tìm kiếm " />
          </div>
        </div>
      </header>
    </>
  );
};

export { Dashboard };
