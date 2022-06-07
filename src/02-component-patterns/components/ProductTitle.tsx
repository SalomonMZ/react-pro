import { useContext } from "react";
import { Product } from "../interfaces/Product.interfaces";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: Partial<Pick<Product, "title">>) => {
  const {
    product: { title: productTitle },
  } = useContext(ProductContext);
  const titleToShow = title ? title : productTitle;
  return <span className={styles.productDescription}>{titleToShow}</span>;
};
