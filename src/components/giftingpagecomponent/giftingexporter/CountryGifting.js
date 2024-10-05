import React from 'react';
import Banner from "../../banner/Banner";
import { useParams } from 'react-router-dom';
import gift from "./assets/corporate-gifting.jpg";
import CorporateGifting from "./CorporateGifting";

export default function CountryGifting() {
    let { city } = useParams();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    city = capitalizeFirstLetter(city);

    return(
        <>
            <Banner headline="Corporate Gifting  Manufacturer & Exporter" subheadline={`${city} Corporate Profile`}/>
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
                    <div
                        className={`font-normal text-[20px] mb-[20px] leading-[30px] text-[rgb(68,68,68)] oswald-text`}>
                        <h2>{`Corporate Diwali & Festive occasional dry fruit gifting in ${city}, Wedding dry fruit
                            gifting in ${city}, Buy Customized dry fruit gift boxes online in ${city}`}</h2>
                        <h2>{`Royaldivine Produce Products LLP gifting in ${city}, Corporate dry fruit boxes in ${city},
                            Bespoke hand crafted wedding gifting dry fruit boxes, corporate Diwali gifting in Chennai,
                            Wedding boxes with dry fruit & chocolates in ${city}`}</h2>
                    </div>
                    <p className="text-justify mb-[15px] lato-text text-[15px] leading-[23px] font-normal text-[#555555]">
                        <strong>Royaldivine Produce Products LLP</strong> {` is a leading corporate dry fruit gifting service provider in ${city}.  We also Provide Unique and Customized Diwali, Dussera,new year &Various Festival Dry fruit Gift Boxes for Employees, CEO, Directors, Partners as well as Various clients of the firm.`}
                    </p>
                    <div className={`flex flex-wrap w-full`}>
                        <div
                            className={`flex items-center lg:w-[30%] w-full transition-transform duration-300 ease-in-out transform hover:scale-100 hover:rotate-6 hover:scale-100`}>
                            <img src={gift} alt="gift"/>
                        </div>
                        <div
                            className={`pl-0 lg:pl-[50px] lg:w-[70%] w-full lato-text text-[15px] leading-[23px] font-normal text-[#555555]`}>
                            <p className={`mb-[15px] text-justify`}>
                                We also provide custom wedding boxes which can include Dry fruits and a lot of other handcrafted gifting options for various functions.
                            </p>
                            <p className={`mb-[15px] text-justify`}>
                                Royaldivine Produce Products LLP is into Corporate dry fruit gifting services as well as it has a network of corporate gifting services which includes
                            </p>
                            <div className="mb-[15px] text-justify space-y-1">
                                <div>1. Pen drives for gifting services in Chennai</div>
                                <div>2. Mugs and T-shirts</div>
                                <div>3. Watches</div>
                                <div>4. Travel passport covers and accessories</div>
                                <div>5. Portable chargers, speakers, headphones</div>
                                <div>6. Badges</div>
                                <div>7. Lanyards</div>
                                <div>8. Card holders</div>
                            </div>
                        </div>
                        <p className="text-justify mb-[15px] lato-text text-[15px] leading-[23px] font-normal text-[#555555]" >{`All the items can be customized according to the client and make it look more elegant.Items can be delivered anywhere in and around ${city}.`}</p>
                    </div>
                </div>
                <CorporateGifting/>
            </div>
        </>
    )
}

