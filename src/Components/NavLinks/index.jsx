import React, { useState, useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart,AiOutlineMenu } from "react-icons/ai";


const NavLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

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

  
  return (
    <div className={`menu-container ${showMenu ? "hSticky" : ""}`}>
      <div className="container">
        <div className="row row-hear align-items-center">
          <div className="manu-bar  d-lg-none d-flex">
                <AiOutlineMenu style={{color:"white", }}/>
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
                    isActive ? "active" : "menu-item"
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
                <AiOutlineHeart style={{ fontSize: "25px", color: "white" }} />
              </NavLink>
            </div>
            <div className="icon">
              <NavLink to={"/cart"}>
                {" "}
                <BsCart3 style={{ fontSize: "25px", color: "white" }} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
