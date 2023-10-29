import React from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import ProductLoves from "../Components/ProductLoves";

const Heart = () => {
  return (
    <>
      <div>
        <Slider title={"Sản phẩm yêu thích"} />
      </div>
      <div className="content">
        <div className="productLove">
          <ProductLoves />
        </div>
      </div>
      <FooterList />
    </>
  );
};

export default Heart;
