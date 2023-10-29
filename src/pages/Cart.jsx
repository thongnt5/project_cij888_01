import React, { useState } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const Cart = () => {
  //Get cart from localStogary
  const [cart, setCart] = useState(() => {
    //Lay gio hang tu localStogory neu co hoac tra ve mang rong
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let totalPriceNumber = 0;
  const totalPrice = () => {
    cart.map((item) => {
      let total = parseInt(
        parseInt(item.product_quantity) * parseInt(item.price)
      );
      totalPriceNumber = totalPriceNumber + total;
      console.log(totalPriceNumber);
    });
  };
  //}, [cart]);
  totalPrice();

  // Hàm xóa phần tử khỏi mảng
  const deleteItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1); // Xóa phần tử tại vị trí index
    setCart({ cart: newCart }); // Cập nhật state với mảng mới
  };
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
    let findIndex = findIndexInList(cart, (item) => item.id === taskId);

    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newcart = [...cart];
      newcart[findIndex].product_quantity =
        newcart[findIndex].product_quantity + 1;

      //3 set lai state de cap nhap lai giao dien
      setCart({ newcart });
    }
  };

  const onDecrease = (taskId) => {
    let findIndex = findIndexInList(cart, (item) => item.id === taskId);

    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newcart = [...cart];
      newcart[findIndex].product_quantity =
        newcart[findIndex].product_quantity - 1;

      //3 set lai state de cap nhap lai giao dien
      setCart({ newcart });
    }
  };
  let render = () => {
    if (cart != null) {
      return cart.map((item, index) => {
        return (
          <>
            <tr index={index} key={index}>
              <td className="infor-cart">
                <div className="img-cart">
                  <NavLink to={`/products/${item.id}`} title={item.title}>
                    <img src={item.images} />
                  </NavLink>
                </div>
                <div className="title-cart">
                  <NavLink
                    to={`/products/${item.id}`}
                    title={item.title}
                    className="cart-ititle"
                  >
                    {item.title}
                  </NavLink>
                </div>
              </td>
              <td className="qty-cart">{`${item.price}.000đ`}</td>
              <td className="number-cart">
                <div className="counter-number">
                  <Button onClick={() => onDecrease(item.id)}>-</Button>
                  <label>{item.product_quantity}</label>
                  <Button onClick={() => onIncrease(item.id)}>+</Button>
                </div>
              </td>
              <td>{`${
                parseInt(item.product_quantity) * parseInt(item.price)
              }.000đ`}</td>
              <td className="td-action">
                <NavLink
                  className="item-delete"
                  onClick={() => deleteItem(index)}
                >
                  Xóa
                </NavLink>
              </td>
            </tr>
          </>
        );
      });
    }
  };
  return (
    <>
      <div>
        <Slider title="Giỏ hàng" />
      </div>
      <div className="content ">
        <div className="cart-content d-none">
          <h3 className="title-flasale">
            <a className="title-name" href="#" title="Bánh đang giảm giá">
              Giỏ Hàng
            </a>
            <br></br>
            <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" />
          </h3>
        </div>
        <div className="container cartpcstyle">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-12 col-cart-left">
              <div className="cart-page">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="cart-title">
                        Thông tin sản phẩm
                      </th>
                      <th scope="col" className="cart-qty">
                        Đơn giá
                      </th>
                      <th scope="col" className="cart-count">
                        Số lượng
                      </th>
                      <th scope="col" className="cart-sum">
                        Thành tiền{" "}
                      </th>
                      <th scope="col" className="cart-action">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                      <span className={`cart-none ${cart.length !=0 ?"d-none":""}`}>Không có sản phẩm nào trong giỏ hàng !</span>
                  
                      {render()}</tbody>
                </table>
              </div>
              <div className="cart-sum-price">
                <label>Tổng tiền: </label>
                <span className="label-totalprice">{`${totalPriceNumber}.000đ`}</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 col-cart-right">BBBB</div>
          </div>
        </div>
      </div>

      <FooterList />
    </>
  );
};

export default Cart;
