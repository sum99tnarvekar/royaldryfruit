import React from 'react';
import Banner from "../banner/Banner";
import AboutProduct from "./AboutProduct";
import {Link, useParams} from "react-router-dom";
import ProductOrigin from "./ProductOrigin";
import {Spices , categoryPath} from "./data/ProductCategories";
import ProductBenefits from "./ProductBenefits";
import {getTitleKey} from "./utility/DataUtility";
import ProductPageIntro from "./ProductPageIntro";
import ProductAdditionalData from "./ProductAdditionalData";

export default function Product() {
    let { variety } = useParams();
    let [category, subCategory] = variety.split("&");
    category = category.charAt(0).toUpperCase() + category.slice(1);
    let titleKey = getTitleKey(subCategory);
    return (
        <>
            <Banner headline={`${titleKey} Manufacturer & Exporter`} subheadline={category}/>
            <div className="contact-exporter container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white">
                <div>
                    <h3 className={`text-center oswald-text text-[34px] leading-[51px] text-[rgb(31,45,107)] font-normal`}>{`${titleKey} Manufacturer & Exporter`}</h3>
                </div>
                <div className="my-6 w-[60%] mx-auto">
                    <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                </div>
                <ProductPageIntro titleKey={titleKey} />
                <ProductOrigin subCategory={subCategory} dataKey={`origin`} />
                <ProductOrigin subCategory={subCategory} dataKey={`defination`} />
                <div className={`w-full flex flex-wrap`}>
                    <div className={`lg:w-[70%] w-full flex flex-wrap`}>
                        <AboutProduct subCategory={subCategory} aboutDataKey={`about`} exportDataKey={`Exporter_data`}/>
                        <ProductBenefits subCategory={subCategory} dataKey={`benefits`} titleKey={titleKey}/>
                        <ProductAdditionalData titleKey={titleKey} />
                    </div>
                    <div className={`lg:w-[30%] w-full`}>
                        <div className={`lg:ml-[35px] ml-0 font-normal text-[20px] mb-[20px] leading-[30px] text-[rgb(68,68,68)] oswald-text`}>
                            <h2 className={`mb-5`}>{category}</h2>
                            <div>
                                <ul className={`lato-text text-[14px] leading-[21px] text-[rgb(85,85,85)] font-normal`}>
                                    {Spices.map((spice, index) => (
                                        <li key={index} className={`px-[15px] py-[10px] border border-[#ddd] ${titleKey === spice ? 'text-white bg-[#1F2D6B] border-[#1F2D6B]' : ''}`}>
                                            <Link to={`/product/spices&${categoryPath[spice]}`} >{spice}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}