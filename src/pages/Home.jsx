import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../Components/Products";
import SliderMenu from "../Components/SliderMenu";

const Home = () => {
  return (
    <div className="bodywrap">
      <SliderMenu />
      <div className="content">
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
                <a className="swiper-slide " title="Đổi trả dễ dàng">
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
                <a className="swiper-slide " title="Hỗ trợ nhanh chóng">
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
                <a className="swiper-slide " title="Thanh toán đa dạng">
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

        <section className="section-danhmuc">
          <div className="row">
            <div className="col-12 swiper-flex">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="outstanding-box">
                  <div className="outstanding-img">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_1.jpg?1694745247263" />
                    <div className="outstanding-detail">
                      <h3>
                        Bánh kếp
                        <br></br>
                        <a href="/outstand" title="Xem ngay">
                          Xem ngay
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-2 col-lg-3 col-md-4 col-6  swiper-slide">
                <div className="outstanding-box">
                  <div className="outstanding-img">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_2.jpg?1694745247263" />
                    <div className="outstanding-detail">
                      <h3>
                        Bánh xu kem
                        <br></br>
                        <a href="/outstand" title="Xem ngay">
                          Xem ngay
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-2 col-lg-3 col-md-4 col-6  swiper-slide">
                <div className="outstanding-box">
                  <div className="outstanding-img">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_3.jpg?1694745247263" />
                    <div className="outstanding-detail">
                      <h3>
                        Bánh mì nướng
                        <br></br>
                        <a href="/outstand" title="Xem ngay">
                          Xem ngay
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-2 col-lg-3 col-md-4 col-6  swiper-slide">
                <div className="outstanding-box">
                  <div className="outstanding-img">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_4.jpg?1694745247263" />
                    <div className="outstanding-detail">
                      <h3>
                        Bánh khác
                        <br></br>
                        <a href="/outstand" title="Xem ngay">
                          Xem ngay
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section-product">
          <Product />
        </section>
      </div>
    </div>
  );
};

export default Home;
