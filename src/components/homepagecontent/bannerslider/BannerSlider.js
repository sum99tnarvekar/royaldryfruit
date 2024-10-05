import React, {memo} from "react";
import Slider from "react-slick";
import sliderData from './SliderData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
    const settings = {
        dots: false,          // Show navigation dots
        infinite: true,      // Infinite scrolling
        speed: 500,          // Animation speed
        slidesToShow: 1,     // Number of slides to show at once
        slidesToScroll: 1,   // Number of slides to scroll per swipe
        autoplay: false,      // Automatically transition to the next slide
        autoplaySpeed: 3000, // Time between each slide transition
        arrows: false,
    };

    return (
        <div className="banner-slider-container container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white md:p-[3rem]">
            <Slider {...settings}>
                {sliderData.map((item, index) => (
                    <div key={index} className="relative">
                        <img src={item.image} alt={`slide-${index}`}/>
                        <div className="absolute md:left-[15px] md:bottom-[15px] md:right-auto bg-black bg-opacity-75 bottom-[5px] right-[5px]">
                            <h2 className="md:p-[15px] md:text-[30px] md:leading-[45px] oswald-text font-bold text-white text-[12px] leading-[20px] p-[6px]">
                                {item.textContent}
                            </h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default memo(BannerSlider)
