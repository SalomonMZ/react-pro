import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        className="bg-dark text-white"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, maxCount }) => (
          <>
            <ProductImg
              className="custom-image"
              style={{ boxShadow: "5px 10px 10px rgba(0,0,0,0.6)" }}
            />
            <ProductTitle className=" text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2 </button>
            {maxCount && count + 2 < maxCount && (
              <button onClick={() => increaseBy(2)}> +2 </button>
            )}
            <span> {count} </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
