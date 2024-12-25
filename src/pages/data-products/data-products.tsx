import styles from "./styles.module.scss";
import { FC } from "react";
import {
  ArrowLeft,
  BadgeDollarSign,
  ChevronDown,
  ChevronRight,
  Search,
  Ticket,
} from "lucide-react";
import Plus from "../../icon/plus";
import NoPlus from "../../icon/no-plus";
import { useNavigate } from "react-router";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { useDataProducts } from "./hook";
import { TCartState } from "../../recoil/type";

const DataProducts: FC = () => {
  const {} = useDataProducts();
  return (
    <>
      <section className={styles.containerDataProduct}>
        <h4 className={styles.containerDataProductTitle}>Thông Tin Sản Phẩm</h4>
        <table className={styles.tableDataProduct}>
          <thead>
            <tr>
              <th className={styles.theadDataProductStt}>STT</th>
              <th className={styles.theadDataProductImage}>Image</th>
              <th className={styles.theadDataProductName}>Tên Sản Phẩm</th>
              <th className={styles.theadDataProductPrice}>Giá</th>
              <th className={styles.theadDataProductSale}>Sale</th>
              <th className={styles.theadDataProductHashtag}>HashTag</th>
              <th className={styles.theadDataProductCategory}>Danh Mục</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tbodyDataProductStt}>1</td>
              <td className={styles.tbodyDataProductImage}>
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ls9f6xwhk0igf3_tn.webp"
                  alt=""
                />
              </td>
              <td className={styles.tbodyDataProductName}>
                <span>
                  DÉP QUAI NGANG CHỮ H GIÁ RẺ SIÊU ĐẸP ĐI ÊM CHÂN TÔN DÁNG.DÉP
                  QUAI NGANG NAM NỮ SÀNH ĐIỆU
                </span>
              </td>
              <td className={styles.tbodyDataProductPrice}>10000</td>
              <td className={styles.tbodyDataProductSale}>-42%</td>
              <td className={styles.tbodyDataProductHashtag}>
                "#aothun", "#Giaydep", "#trangdiem", "#TaiNghe"
              </td>
              <td className={styles.tbodyDataProductCategory}>Giày dép</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export { DataProducts };
