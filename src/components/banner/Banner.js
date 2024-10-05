import "./css/Banner.css"
import React from "react";

export default function Banner({headline , subheadline}){
    return (
        <div className={`banner-container container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-[#333]`}>
            <div className={``}>
                <h1 className="oswald-text font-normal text-white text-[34px] leading-[51px]">
                    {headline}
                </h1>
                <h3 className="oswald-text font-extralight text-white text-[20px] leading-[30px]">
                    {subheadline}
                </h3>
            </div>
        </div>
    )
}