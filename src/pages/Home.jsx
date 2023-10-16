import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../Components/Products";

const Home = () => {
  return (
    <div className="bodywrap">
      <section className="section-slider">
        <div className="section-img">
          <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1694745247263" />
        </div>
        <div className="thumb-slider">
          <div className="slider-text">
            <h2 className="title-slider">Bánh tươi mỗi ngày</h2>
            <div className="slider-content">
              Giảm đến 20% khi đặt hàng qua web
            </div>
            <a className="slider-button" title="Xem ngay" href="#">
              Xem Ngay
            </a>
          </div>
        </div>
      </section>

      <section className="section-chinhsach">
        <div className="container">
          <div className="row swiper-container">
            <div className="col-lg-4 swiper-wrapper">
              <a className="swiper-slide " title="Miễn phí vận chuyển">
                <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1694745247263" />

                <div className="chinhsach-text">
                  <span className="title">Miễn phí vận chuyển</span>
                  <span className="des">
                    Áp dụng free ship cho tất cả đơn hàng từ 300 nghìn
                  </span>
                </div>
              </a>
            </div>
            <div className="col-lg-4  swiper-wrapper">
              <a className="swiper-slide " title="Miễn phí vận chuyển">
                <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_2.png?1694745247263" />

                <div className="chinhsach-text">
                  <span className="title">Đổi trả dễ dàng</span>
                  <span className="des">
                    Đổi ngay trong ngày nếu như bánh không đúng yêu cầu
                  </span>
                </div>
              </a>
            </div>

            <div className="col-lg-4  swiper-wrapper">
              <a className="swiper-slide " title="Miễn phí vận chuyển">
                <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_3.png?1694745247263" />

                <div className="chinhsach-text">
                  <span className="title">Hỗ trợ nhanh chóng</span>
                  <span className="des">
                    Gọi Hotline: 19006750 để được hỗ trợ ngay
                  </span>
                </div>
              </a>
            </div>

            <div className="col-lg-4    swiper-wrapper">
              <a className="swiper-slide " title="Miễn phí vận chuyển">
                <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_4.png?1694745247263" />

                <div className="chinhsach-text">
                  <span className="title">Thanh toán đa dạng</span>
                  <span className="des">
                    Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-product">
      <Product/>
      </section>
    </div>
  );
};

export default Home;
