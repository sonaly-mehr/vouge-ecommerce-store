"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BRAND_ICONS } from "@/constant";
import Image from "next/image";

const Brands = () => {

  var settings = {
    autoplay: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="innerWidth">
      <Slider {...settings}>
        {BRAND_ICONS?.map((brand) => (
          <Image src={brand} alt="" className="w-full h-auto"/>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
