import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Products";
import NavLinks from "../Components/NavLinks";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";

const Products = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProducts(() => ({ data: _data, isLoading: false }));
    })();
  }, []);

  const { data, isLoading } = products;

  console.log(data);

  return (
    <>
      <div className="product-list">
        <Slider title={"Tất cả sản phẩm"} />
        <Product />
      </div>
      <FooterList />
    </>
  );
};

export default Products;
