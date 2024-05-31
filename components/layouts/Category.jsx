"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cloth from "../../public/clothes.png";

const Category = () => {

  var settings = {
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

  const categories = [
    {
      img: cloth,
      heading: "Women",
      items: "123 items",
    },
    {
      img: cloth,
      heading: "Man",
      items: "123 items",
    },
    {
      img: cloth,
      heading: "Kids",
      items: "123 items",
    },
    {
      img: cloth,
      heading: "Jwellery",
      items: "123 items",
    },
    {
      img: cloth,
      heading: "Shoe",
      items: "123 items",
    },
  ];
  return (
    <div className="innerWidth  py-20 bg-secondary">
      <div className="mt-10 lg:mt-0">
        <h2 className="heading">Shop By Category</h2>
        <p className="paragraph">Showing our latest arrival on this summer</p>
      </div>
      <Slider {...settings}>
        {categories.map((category) => (
          <div className="">
            <Image
              src={category?.img}
              alt=""
              width={300}
              height={300}
              className="rounded-full mb-4 block"
            />
            <div className="flex flex-col gap-1 justify-center text-center ">
              <h3 className="subheading cursor-pointer hover:text-primary transition-all delay-75">
                {category?.heading}
              </h3>
              <span className="text-[13px] text-[#aeb3c3]">
                {category?.items}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
