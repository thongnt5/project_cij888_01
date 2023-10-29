import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { CartContext } from "../ProductsFalseSale";
import { Button } from "antd";
import axios from "axios";

const NavLinks = () => {
  //const {cartItemCount} = useContext(CartContext);

  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [previousMouseOver, setPreviousMouseOver] = useState(false);
  const [productsLove, setProductsLove] = useState({
    data: null,
    isLoading: false,
  });

  //Event xử lý showMenu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        // Thay đổi 1 thành vị trí cuộn mà bạn muốn để hiển thị menu
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Event xử lý số lượng Product Loves
  useEffect(() => {
    (async () => {
      setProductsLove((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProductsLove({ data: _data, isLoading: false });
    })();
  }, []);

  let countProductLove = 0;
  const countLoveProduct = () => {
    if (productsLove.data != null) {
      productsLove.data.map((item) => {
        if (item.product_like) {
          countProductLove = countProductLove + 1;
        }
      });
    }
  };

  countLoveProduct();   
 // console.log(count);


  //Get cart from localStogary
  const [cart, setCart] = useState(() => {
    //Lay gio hang tu localStogory neu co hoac tra ve mang rong
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handlerMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
      setPreviousMouseOver(true);
    }
  };
  const handlerMouseLeave = () => {
    if (previousMouseOver) {
      setIsHovered(false);
      setPreviousMouseOver(false);
    }
  };

  let totalPriceNumber = 0;
  const totalPrice = () => {
    cart.map((item) => {
      let total = parseInt(
        parseInt(item.product_quantity) * parseInt(item.price)
      );
      totalPriceNumber = totalPriceNumber + total;
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

  let render = () => {
    if (cart != null) {
      return cart.map((item, index) => {
        return (
          <div key={index}>
            {" "}
            <div className="cart-product" key={index}>
              <div className="cart-img">
                <NavLink to={`/products/${item.id}`} title={item.title}>
                  <img src={item.images} />
                </NavLink>
              </div>
              <div className="cart-infor">
                <div className="cart-name">
                  <NavLink
                    to={`/products/${item.id}`}
                    title={item.title}
                    className="cart-ititle"
                  >
                    {item.title}
                  </NavLink>
                  <NavLink
                    className="item-delete"
                    onClick={() => deleteItem(index)}
                  >
                    Xóa
                  </NavLink>
                </div>
                <br></br>
                <div className="grid-price">
                  <span className="cart-price">{`${item.product_quantity} x ${item.price}.000đ`}</span>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className={`menu-container ${showMenu ? "hSticky" : ""}`}>
        <div className="container">
          <div className="row row-hear align-items-center">
            <div className="manu-bar  d-lg-none d-flex">
              <AiOutlineMenu style={{ color: "white" }} />
            </div>
            <div className="col-lg-2 menu-logo">
              <NavLink to={"#"}>
                <img
                  src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/logo.png?1694745247263"
                  alt="Brakey Shop"
                />
              </NavLink>
            </div>
            <div className="col-lg-8 menu-content">
              <ul>
                <li className="menu-item">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/admin"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                    style={{ display: "none" }}
                  >
                    Admin
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Giới Thiệu
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Sản Phẩm
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/news"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Tin Tức
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Liên Hệ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 menu-control">
              <div className="icon">
                <BsSearch style={{ fontSize: "25px" }} />
              </div>
              <div className="icon">
                <FaRegUser style={{ fontSize: "25px" }} />
              </div>
              <div className="icon">
                <NavLink to={"/heart"}>
                  {" "}
                  <AiOutlineHeart
                    style={{ fontSize: "25px", color: "white" }}
                  />
                </NavLink>
              </div>

              <span className="count-heart">{countProductLove}</span>
              <div className="icon " id="icon-cart">
                <NavLink to={"/cart"} onMouseMove={handlerMouseEnter}>
                  {" "}
                  <BsCart3 style={{ fontSize: "25px", color: "white" }} />
                </NavLink>
              </div>
              <span className="count-cart">{cart.length}</span>
            </div>
          </div>
        </div>

        <div
          className={`list-cart ${isHovered ? "" : "d-none"}`}
          id="list-cart"
          onMouseLeave={handlerMouseLeave}
        >
          <div className="cart-box">
          <span className={`cart-none ${cart.length !=0 ?"d-none":""}`}>Không có sản phẩm nào trong giỏ hàng !</span>
            {render()}
            </div>
          <div className="total-price">
            <div className="cart-total">
              <span className="label-total">Tổng tiền: </span>

              <span className="label-totalprice">{`${totalPriceNumber}.000đ`}</span>
            </div>
            <div className="cart-btn">
              <div className="btn-viewcart">
                <NavLink className="cart-lable" title="Giỏ hàng" to={"/cart"}>
                  Giỏ Hàng
                </NavLink>
              </div>
              <div className="btn-thanhtoan">
                <NavLink className="cart-lable" title="Thanh Toán" to={"/payment"}>
                  Thanh Toán
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
