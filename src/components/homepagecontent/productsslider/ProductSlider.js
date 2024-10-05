import React, {memo} from "react";
import './css/ProductSlider.css';
import "slick-carousel/slick/slick.css";
import productsData from './ProductsData';
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider";

const ProductSlider = () => {
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
        <div
            className="productSlider container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white">
            <div>
                <div className="border-b border-[#ddd] pb-5 mb-5 relative">
                    <h4 className={`mb-[10px] text-[27px] leading-[27px] text-[#555] font-normal oswald-text`}>
                        Our <span className={`text-[#1f2d6b]`}>Products</span>
                    </h4>
                </div>
                <CustomSlider productKey="normal" data={productsData} />
            </div>
        </div>
    )
}

export default memo(ProductSlider);
