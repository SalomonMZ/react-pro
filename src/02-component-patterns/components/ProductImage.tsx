import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImg = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  const image = img ? img : product.img;
  return (
    <img
      className={styles.productImg}
      src={image ? image : noImage}
      alt="Empty product"
    />
  );
};
