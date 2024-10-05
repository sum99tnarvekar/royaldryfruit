import React, {memo} from "react";

function ProductsLlp() {
    return (
        <div className="productsllp-container container-shadow w-full md:w-full xl:w-[1170px] xl:mx-auto bg-white md:p-0 p-[10px]">
            <div className={`productsllp-container-body text-center md:p-[40px]`}>
                <h3 className="mb-5 uppercase productsllp-container-title oswald-text font-normal text-gray-700 text-[33px] leading-[33px]">
                    Welcome to the Royaldivine Produce<span className="font-bold"> Products </span>LLP
                </h3>
                <div className="my-6 w-[70%] mx-auto">
                    <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                </div>
                <p className="w-[70%] mx-auto lato-text font-normal text-gray-600 text-[15px] leading-[24px]">
                    We genuinely trust that clients are in charge of achievement of any association and are dedicated to
                    give quality products and operations to our customers before conferred time span.
                </p>
            </div>
        </div>
    )
}

export default memo(ProductsLlp);