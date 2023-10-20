import React, { useState, useEffect} from "react";
import axios from "axios";
import "./style.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "antd";
import _ from "lodash";

const ProductsFalseSale = () => {
  const [productsFalesale, setProductsFalesale] = useState({
    data: null,
    isLoading: false,
  });
  const [newProductsFalesale, setNewProductsFalesale] = useState([]);

  useEffect(() => {
    (async () => {
      setProductsFalesale((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProductsFalesale({ data: _data, isLoading: false });
    })();
  }, []);

  //Ham tim vi tri index
  function findIndexInList(list, conditionFn) {
    for (let i = 0; i < list.length; i++) {
      if (conditionFn(list[i])) {
        return i; // Trả về chỉ số của đối tượng thỏa mãn điều kiện
      }
    }
    return -1; // Trả về -1 nếu không tìm thấy đối tượng thỏa mãn điều kiện
  }

  //Hàm Tăng giảm số lượng
  const onIncrease = (taskId) => {
    let findIndex = findIndexInList(
      productsFalesale.data,
      (item) => item.id === taskId
    );

    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newProductsFalesale = [...productsFalesale.data];
      newProductsFalesale[findIndex].product_quantity =
        newProductsFalesale[findIndex].product_quantity + 1;

      //3 set lai state de cap nhap lai giao dien
      setProductsFalesale({ data: newProductsFalesale, isLoading: false });
    }
  };
  const onDecrease = (taskId) => {
    let findIndex = findIndexInList(
      productsFalesale.data,
      (item) => item.id === taskId
    );
    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      if (productsFalesale.data[findIndex].product_quantity > 1) {
        let newProductsFalesale = [...productsFalesale.data];
        newProductsFalesale[findIndex].product_quantity =
          newProductsFalesale[findIndex].product_quantity - 1;

        //3 set lai state de cap nhap lai giao dien
        setProductsFalesale({ data: newProductsFalesale, isLoading: false });
      }
    }
  };

  //Event Phân trang
  {
    /**
  let itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = _.chunk(productsFalesale.data, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = pages[currentPage - 1];
 */
  }

  // console.log(paginatedProducts);

  //Event Slick

 
  
    {/** 

     const [currentProductIndex, setCurrentProductIndex] = useState(0);
    //const [productLengt, setProductLengt] = useState(0);

    const handleNextClick = () => {
      console.log(productsFalesale.data);
      if (currentProductIndex < productsFalesale.data.length - 1) {
        console.log(productsFalesale.data.length);
        setCurrentProductIndex(currentProductIndex + 1);
        setProductLengt(productsFalesale.data.length);
      }
    };

    const handlePrevClick = () => {
      if (currentProductIndex > 0) {
        setCurrentProductIndex(currentProductIndex - 1);
      }
    };

    if (productsFalesale.data != null) {
      const currentProduct = productsFalesale.data[currentProductIndex];
    }
  }
  */}

  let render = () => {
    if (productsFalesale.data != null) {
      return productsFalesale.data.map((item) => {
        if (item.discount > 0) {
          return (
            <div className="product-box" key={item.id}>
              <div className="product-img">
                <div className="lable-flex">
                  <div className={`discount`}>
                    <label>{`${item.discount}%`}</label>
                  </div>
                  <br></br>
                  <div className={`new ${item.product_new ? "" : "d-none"}`}>
                    <label>New</label>
                  </div>
                  <button className="icons-heart">
                    <AiOutlineHeart />
                  </button>
                </div>
                <a href={`/products/${item.id}`}>
                  <img src={item.images} />
                </a>
              </div>
              <div className="product-detail">
                <div className="product-name">
                  <h3>
                    <a href={`/products/${item.id}`}>{item.title}</a>
                  </h3>
                </div>
                <div className="price-box">
                  <div className="price-new">{`${parseInt(
                    (parseInt(item.price) * (100 - parseInt(item.discount))) /
                      100
                  )}.000đ`}</div>
                  <div className="price-old">{`${item.price}.000đ`}</div>
                </div>
                <div className="price-qty">
                  <div className="counter-number">
                    <Button onClick={() => onDecrease(item.id)}>-</Button>
                    <label>{item.product_quantity}</label>
                    <Button onClick={() => onIncrease(item.id)}>+</Button>
                  </div>
                  <div className="btn-cart">
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };

  return (
    <>
      <div className="product-list">{render()}</div>
      {/** 
       * <div className="slick-left">
        <Button >
          {"<"}
        </Button>
      </div>
      <div className="slick-right">
        <Button
          
          
        >
          {">"}
        </Button>
      </div>
      */}
    </>
  );
};

export default ProductsFalseSale;