import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { CartContext } from "../ProductsFalseSale";
import { Button } from "antd";

const NavLinks = () => {
  //const {cartItemCount} = useContext(CartContext);

  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [previousMouseOver, setPreviousMouseOver] = useState(false);

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

              <span className="count-heart">0</span>
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
          className={`list-cart ${isHovered ? "" : ""}`}
          id="list-cart"
          onMouseLeave={handlerMouseLeave}
        >
          <div className="cart-box">
            {cart.map((item, index) => (
              <> <div className="cart-product" key={index}>
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
                  <br></br>
                  <NavLink className="item-delete">Xóa</NavLink>
                </div>
                <br></br>
                <div className="gird-cart">
                  <div className="gird-title">
                    <label style={{ marginLeft: "-47px" }}>Số lượng</label>
                    <div className="gird-qty">
                      <Button onClick={() => onDecrease(item.id)}>-</Button>
                      <label style={{ width: "30px" }}>
                        {item.product_quantity}
                      </label>
                      <Button onClick={() => onIncrease(item.id)}>+</Button>
                    </div>
                  </div>
                  <div className="grid-price">
                    <span className="cart-price">{`${item.price}.000đ`}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            </>
             
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
