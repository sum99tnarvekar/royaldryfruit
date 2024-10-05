import React, {memo} from "react";
import about from "./assets/about.png"
import check from "./assets/check.svg"

const AboutBlog = () => {
    return (
        <div className={`container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white md:p-[3rem]`}>
            <div className={`w-full flex flex-wrap`}>
                <div className={`lg:w-[50%] w-full flex justify-center`}>
                    <img src={about} alt="about"/>
                </div>
                <div className={`lg:w-[50%] w-full`}>
                    <div className={`mb-[40px] pb-[10px] border-b-2 border-[#1f2d6b]`}>
                        <h3 className={`oswald-text font-normal text-[#1f2d6b] text-[33px] leading-[33px]`}>
                            ABOUT
                            <span className={`text-[#444]`}> US</span>
                        </h3>
                    </div>
                    <p className={`mb-[15px] lato-text font-normal text-[#555555] text-[15px] leading-[23px] text-justify`}>
                        We at<strong> Royaldivine Produce Products LLP </strong>genuinely trust that clients are in charge
                        of achievement of any association. We are selling Red chilli, Garlic, Cloves, Coriander, Mustard,
                        Cardamom, Ginger, Fenugreek, Tamarind, Turmeric, Black Pepper, White Pepper, Almonds, Cashewnuts,
                        Raisin  and Still more to be added. We try to give our customers the best of our Services and Quality.
                        This is the reason consumer loyalty is our essential target at Royaldivine Produce Products LLP. We are
                        unequivocally dedicated to give quality products and operations to our customers before conferred time span.
                        Our workforce and experienced group are exclusively in charge of development and achievement of association.
                    </p>
                    <div className={`lato-text font-normal text-[#555555] text-[15px] leading-[23px]`}>
                        <ul>
                            <li className={`flex`}>
                                <img src={check} className={`w-4 h-4 mt-1`} alt="check"/>
                                <span className={`ml-2`}>To provide good quality products and a reliable service in order.</span>
                            </li>
                            <li className={`flex`}>
                                <img src={check} className={`w-4 h-4 mt-1`} alt="check"/>
                                <span className={`ml-2`}>To identify every customer's specific needs and ensure that are satisfactorily met.</span>
                            </li>
                            <li className={`flex`}>
                                <img src={check} className={`w-4 h-4 mt-1`} alt="check"/>
                                <span className={`ml-2`}>To provide efficient service to each and every valued customer.</span>
                            </li>
                            <li className={`flex`}>
                                <img src={check} className={`w-4 h-4 mt-1`} alt="check"/>
                                <span className={`ml-2`}>To extend the existing markets by building long-term high profile relationships and to maintain a high level of trust with our customers.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(AboutBlog);