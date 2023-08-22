import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/slide1.webp";
import img2 from "../img/slide2.webp";
import img3 from "../img/slide3.webp";
import img4 from "../img/slide4.webp";
import img5 from "../img/slide5.webp";
import img6 from "../img/slide6.webp";

import largeimg1 from "../img/largeimage1.webp";
import largeimg2 from "../img/largeimage2.webp";
import largeimg3 from "../img/largeimage3.webp";
import largeimg4 from "../img/largeimage4.webp";
import largeimg5 from "../img/largeimage5.webp";
import largeimg6 from "../img/largeimage6.webp";

import "../css/ResponsiveSlider.css";

export default class ResponsiveSlider extends Component {
  state = {
    isLargeScreen: window.innerWidth >= 768,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isLargeScreen: window.innerWidth >= 768 });
  };

  render() {
    const defaultImages = [img1, img2, img3, img4, img5, img6];
    const largeScreenImages = [
      largeimg1,
      largeimg2,
      largeimg3,
      largeimg4,
      largeimg5,
      largeimg6,
    ];

    const images = this.state.isLargeScreen ? largeScreenImages : defaultImages;

    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      centerMode: false,
      centerPadding: "500px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="responsive-slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className="responsive-slider" src={image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
