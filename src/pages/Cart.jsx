import React from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";

const Cart = () => {
  return (
    <>
      <div>
        <Slider title="Giỏ hàng" />
      </div>
      <div className="content container cartpcstyle">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12 col-cart-left">
            <div className="cart-page"></div>
          </div>
          <div className="col-xl-4 col-lg-4 col-12 col-cart-right"></div>
        </div>
      </div>
      <FooterList />
    </>
  );
};

export default Cart;
