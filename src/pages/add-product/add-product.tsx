import styles from "./styles.module.scss";
import { FC } from "react";
import { useAddProduct } from "./hook";
import Dropdown from "../../components/dropdown/drop-down";

const AddProduct: FC = () => {
  const {
    listCategories,
    isImages,
    setIsImages,
    handleImageChange,
    handleChange,
    handleSubmit,
    handleCategory,
    productData
  } = useAddProduct();
  return (
    <>
      <section className={styles.container}>
        <header className={styles.headerWrap}>
          <div className={styles.headerWrapLeft}>
            <div>Thêm Sản Phẩm</div>
          </div>
        </header>

        <main className={styles.containerInformation}>
          <form className={styles.formInformation}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Product Name:</label>
              <input
                type="text"
                id="name"
                name="titleProduct"
                required
                placeholder="Nhập tên sản phẩm"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Product Image:</label>
              {!isImages ? (
                <input
                  type="text"
                  id="name"
                  name="imgProduct"
                  required
                  placeholder="Link image..."
                  onChange={handleChange}
                  autoComplete="off"
                />
              ) : (
                <input type="file" onChange={handleImageChange} />
              )}

              <label className={styles.switchContainer}>
                <input
                  type="checkbox"
                  className={styles.srOnly}
                  onChange={() => setIsImages(!isImages)}
                />
                <div className={styles.switch}></div>
              </label>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="priceProduct"
                min="0"
                step="0.01"
                required
                placeholder="244.000đ..."
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="category">Category:</label>
              <Dropdown
                name="categoryName"
                title="Category"
                data={listCategories}
                onSelect={handleCategory}
                keyValue="categoryName"
                selectedId={productData.categoryName}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="sku">Hash Tag:</label>
              <input
                type="text"
                id="sku"
                name="hashTag"
                required
                placeholder="#xemay , aodep , ..."
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="stockQuantity">Stock Quantity:</label>
              <input
                type="number"
                id="stockQuantity"
                name="stockProduct"
                min="0"
                required
                placeholder="23..."
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className={styles.submitDiv}>
              <button
                type="submit"
                className={styles.buttonSubmit}
                onClick={handleSubmit}
              >
                Add Product
              </button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export { AddProduct };
