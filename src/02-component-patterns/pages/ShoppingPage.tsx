import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((prd) => (
          <ProductCard
            key={prd.id}
            className="bg-dark text-white"
            product={prd}
            onChange={onProductCountChange}
            value={shoppingCart[prd.id]?.count || 0}
          >
            <ProductImg className="custom-image" />
            <ProductTitle className=" text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([k, prd]) => (
          <ProductCard
            key={k}
            className="bg-dark text-white"
            product={prd}
            style={{ width: "100px" }}
            value={prd.count}
            onChange={onProductCountChange}
          >
            <ProductImg className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
