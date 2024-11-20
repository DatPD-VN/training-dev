import { FC } from "react";

import styles from "./styles.module.scss";



const Dashboard: FC = () => {
  return <>
    <header>
        <div >
          <div className={styles.container}>
            <a href="">
              <p>Thông Báo </p>
              <svg viewBox="3 2.5 14 14" x="0" y="0" className="shopee-svg-icon icon-notification-2"><path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path><path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path></svg>
            </a>
          </div>
        </div>
  
    </header>


  </>;
};

export { Dashboard };
