import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImg className="custom-image" />
          <ProductTitle title="Coffee Cup" className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImg />
          <ProductTitle
            title="Coffee Cup"
            style={{ fontWeight: "bold", color: "darkgreen" }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
