"use client";
import { useRef } from "react";
import img1 from "../../public/banner.png";
import img2 from "../../public/fashion.png";
import img3 from "../../public/trending.png";
import img4 from "../../public/spring.png";
import img5 from "../../public/new_arrivals.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "lucide-react";


export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRight className="w-[65px]" style={{
          ...style,
        }}/>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeft className="w-[65px]" style={{
          ...style,
        }}/>
    </div>
  );
}
const Hero = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };
  const images = [img1, img5, img3, img2, img4,];
  return (
    <>
      <div className="w-screen hero-slider">
        <Slider {...settings} className="w-full">
          {images.map((item, index) => (
                <Image
                  src={item}
                  alt=""
                  width={500}
                  height={400}
                  className="w-full h-auto lg:!h-[500px]"
                />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
