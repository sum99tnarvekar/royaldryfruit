import React, {memo} from 'react';
import Slider from 'react-slick';
import imgData from './SuccessImageData';
import scissor from './assets/scissor.svg';

function SuccessSlider() {
    // Slick slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Show 5 slides
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // 3 slides for medium screens
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // 1 slide for small screens
                }
            }
        ]
    };

    return (
        <div className={`container-shadow w-full p-[30px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white`}>
            <div className={'pb-[10px] mb-[40px] border-dashed border-b border-[#ddd] relative'}>
                <h4 className="mb-[10px] oswald-text font-normal text-[27px] leading-[27px] text-[#444]">
                    SOME OF OUR <span className={`text-[rgb(31,45,107)]`}>CLIENTS</span>
                </h4>
                <img src={scissor} className={'absolute left-[0px] w-6 h-6'} alt="scissor"/>
            </div>
            <Slider {...settings}>
                {imgData.map((item, index) => (
                    <div key={index}>
                        <a href='/'>
                            <img src={item.img} className={`w-[190px] h-[90px] mx-auto`} alt={`Client ${index + 1}`}/>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default memo(SuccessSlider);
