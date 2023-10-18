import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
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
    <div className="product-item">
        {/*{data?.map((item,index) => (
            <div key={item.id}> 
               <h2>{item.title}</h2>
            </div>
        ))}*/}
    </div>
    );
};

export default Product;
