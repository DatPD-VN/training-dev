import styles from "./styles.module.scss";
import { TFlashSaleProps } from "./type";
import useFlashSale from "./hook";
import { Clock } from "lucide-react";

const FlashSale = ({ time }: TFlashSaleProps) => {
  const {} = useFlashSale(time);

  return (
    <>
      <section className={styles.containerFlashSale}>
        <div className={styles.containerFlashSaleWrapper}>
          <div className={styles.containerFlashSaleImg}>
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e5389.png"
              alt=""
            />
          </div>
          <div className={styles.containerFlashSaleTitle}>
            <Clock size={15} />
            BẮT ĐẦU SAU
          </div>
          <div className={styles.containerFlashSaleMain}>
            <div className={styles.containerFlashSaleDivNumber} id="hours">
              <div
                className={styles.containerFlashSaleNumbers}
                id="hours-first"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`hours-first-${i}`}
                    className={styles.containerFlashSaleNumberItem}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div
                className={styles.containerFlashSaleNumbers}
                id="hours-seconds"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`hours-seconds-${i}`}
                    className={styles.containerFlashSaleNumberItem}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.containerFlashSaleDivNumber} id="minutes">
              <div
                className={styles.containerFlashSaleNumbers}
                id="minutes-first"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`minutes-first-${i}`}
                    className={styles.containerFlashSaleNumberItem}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div
                className={styles.containerFlashSaleNumbers}
                id="minutes-seconds"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`minutes-seconds-${i}`}
                    className={styles.containerFlashSaleNumberItem}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.containerFlashSaleDivNumber} id="seconds">
              <div
                className={styles.containerFlashSaleNumbers}
                id="seconds-first"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`seconds-first-${i}`}
                    className={styles.containerFlashSaleNumberItem}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div
                className={styles.containerFlashSaleNumbers}
                id="seconds-seconds"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`seconds-seconds-${i}`}
                    className={styles.containerFlashSaleNumberItem}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSale;
