import React, {memo} from 'react';
import gift from './assets/corporate-gifting.jpg';
import CorporateGifting from "./CorporateGifting";

const GiftingExporter = () => {
    return (
        <div className="gifting-exporter container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white">
            <div className="pt-[20px]">
                <h1 className="text-center oswald-text text-[34px] leading-[51px] font-normal text-[#1f2d6b]">
                    Corporate Gifting Manufacturer & Exporter
                </h1>
            </div>
            <div className="my-6 w-[50%] mx-auto">
                <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </div>
            <div>
                <p className="text-justify mb-[15px] lato-text text-[15px] leading-[23px] font-normal text-[#555555]">
                    <strong>Royaldivine Produce Products LLP</strong> With cutthroat competition in the market, corporate gifts are often a way businesses use to distinguish themselves and create a brand image. However, with increasing number of client and employee engagement events & festival celebrations, there is a dearth of unique corporate gifting ideas.
                </p>
                <div className={`flex flex-wrap w-full`}>
                    <div className={`flex items-center lg:w-[30%] w-full transition-transform duration-300 ease-in-out transform hover:scale-100 hover:rotate-6 hover:scale-100`}>
                        <img src={gift} alt="gift"/>
                    </div>
                    <div className={`pl-0 lg:pl-[50px] lg:w-[70%] w-full lato-text text-[15px] leading-[23px] font-normal text-[#555555]`}>
                        <p className={`mb-[15px] text-justify`}>
                            Dry fruits and nuts symbolize purity, which is why since ancient times, offering dry fruits to our guests has been a part of our culture. What best to offer to your clients and employees than dry fruits and nuts that are not only equally mouth-watering and healthy, but also symbolize purity!
                        </p>
                        <p className={`mb-[15px] text-justify`}>
                            We offer gift-wrapped dry fruits and nuts in innovative packaging, customized with your logo and message. Our corporate gift dry fruit packs are totally customizable, across weight and products. Multiple choices of dry fruit boxes are available, starting from ½ kg and 1 kg. An array of unique packaging, including pouches, potlis, and cans of different shapes, etc. are available, making them the perfect corporate gifting idea.
                        </p>
                        <p className={`mb-[15px] text-justify`}>
                            Moreover, we extend end-to-end gifting solutions for corporate organizations. All you need to do is browse through our assortment of high-quality dry fruits and nuts, customize the weight, product category, packaging and your message and order corporate gifts online. Then simply share the addresses of your recipients and we deliver the gifts up to the last mile. No hassles!
                        </p>
                    </div>
                </div>
            </div>
            <CorporateGifting/>
        </div>
    )
}

export default memo(GiftingExporter);