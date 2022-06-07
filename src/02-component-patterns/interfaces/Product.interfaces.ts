import { ReactNode } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactNode;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: Partial<Pick<Product, "title">>) => JSX.Element;
  Image: ({ img }: Pick<Product, "img">) => JSX.Element;
  Buttons: () => JSX.Element;
}
