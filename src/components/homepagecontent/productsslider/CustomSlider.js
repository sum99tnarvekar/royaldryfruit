import React from 'react';
import Slider from "react-slick";
import './css/ProductSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider({productKey , data}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // For medium screens
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,  // For small screens
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className="slide-container">
                    <div className="mb-[20px] border-b-4 border-[#1f2d6b]">
                        <img src={item.img} alt={item.title}
                             className="transition-transform duration-300 ease-in-out transform hover:scale-100 hover:rotate-6"/>
                    </div>
                    <div className={`px-[15px] pb-[15px] border-b border-[#1f2d6b]`}>
                        <a href='/'>
                            <h4 className={`mb-[15px] text-[16px] leading-[24px] transition-all duration-300 ease-in-out text-[#22306E] hover:text-[#b3cc27] font-normal oswald-text`}>
                                {item.title}
                            </h4>
                        </a>
                        {
                            productKey === 'normal' && (
                                <>
                                    <p className={`mb-[15px] text-[14px] leading-[21px] text-[#555] font-normal lato-text`}>
                                        {item.description}
                                    </p>
                                    <div className={`flex justify-end`}>
                                        <a href="/"
                                           className={`p-1 text-[10px] leading-[18px] bg-[#92c02c] text-white font-normal lato-text`}>Read
                                            More
                                        </a>
                                    </div>
                                </>
                    )
                    }
                </div>
                </div>
                ))}
        </Slider>
    )
}