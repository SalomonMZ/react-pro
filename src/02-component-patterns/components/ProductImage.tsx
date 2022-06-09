import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImg = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const image = img ? img : product.img;
  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={image ? image : noImage}
      alt="Empty product"
    />
  );
};
