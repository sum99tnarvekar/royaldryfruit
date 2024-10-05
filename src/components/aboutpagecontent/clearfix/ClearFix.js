import React, {memo} from "react";
import earth from "./assets/earth-14-svgrepo-com.svg";
import vision from "./assets/vision-svgrepo-com.svg";
import setting from "./assets/setting-tool-svgrepo-com.svg";

const ClearFix = () => {
    return (
        <div className={`container-shadow w-full p-[10px] md:px-[3rem] md:py-[1rem] xl:w-[1170px] xl:mx-auto bg-white`}>
            <div className={`w-full flex flex-wrap`}>
                <div className={`lg:w-[33.33%] w-full`}>
                    <div className={`bg-[#426175] px-[70px] py-[40px] relative`}>
                        <div className={`absolute bottom-5 right-5 z-0 `}>
                            <img src={earth} alt="earth" className="h-[200px] w-[200px] object-cover"/>
                        </div>
                        <div className={`relative z-10`}>
                            <h3 className="text-center mb-[20px] oswald-text font-normal text-white text-[24px] leading-[36px]">
                                Our Mission
                            </h3>
                            <p className="text-center mb-[15px] lato-text font-normal text-white text-[15px] leading-[23px]">
                                To focus on continuous improvements in our internal and external systems. To offer
                                products
                                at the most competitive price without compromising on quality.
                            </p>
                            <div className={`flex justify-center mt-5`}>
                                <a href="/"
                                   className="px-2 py-2 border border-white lato-text font-bold text-white bg-[#426175] hover:text-[#5e5e5e] hover:bg-white text-[12px] leading-[17px]">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`lg:w-[33.33%] w-full`}>
                    <div className={`bg-[#7D4A4A] px-[70px] py-[40px] relative`}>
                        <div className={`absolute bottom-0 right-5 z-0 `}>
                            <img src={vision} alt="vision" className="h-[200px] w-[250px] object-cover"/>
                        </div>
                        <div className={`relative z-10`}>
                            <h3 className="text-center mb-[20px] oswald-text font-normal text-white text-[24px] leading-[36px]">
                                Our Vision
                            </h3>
                            <p className="text-center mb-[15px] lato-text font-normal text-white text-[15px] leading-[23px]">
                                To develop capabilities to become end to end solutions provider. To grow into an organization that will be ethical in its dealings keeping in mind all stake holders.
                            </p>
                            <div className={`flex justify-center mt-5`}>
                                <a href="/"
                                   className="px-2 py-2 border border-white lato-text font-bold text-white bg-[#7D4A4A] hover:text-[#7D4A4A] hover:bg-white text-[12px] leading-[17px]">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`lg:w-[33.33%] w-full`}>
                    <div className={`bg-[#668A49] px-[70px] py-[40px] relative`}>
                        <div className={`absolute bottom-[-18px] right-5 z-0 `}>
                            <img src={setting} alt="setting" className="h-[250px] w-[250px] object-cover"/>
                        </div>
                        <div className={`relative z-10`}>
                            <h3 className="text-center mb-[20px] oswald-text font-normal text-white text-[24px] leading-[36px]">
                                Our Strategy
                            </h3>
                            <p className="text-center mb-[15px] lato-text font-normal text-white text-[15px] leading-[23px]">
                                To device newer technology and methods to reach quality spices in the quickest possible time to our customers and maintain the stronghold of Indian spices across the world.
                            </p>
                            <div className={`flex justify-center mt-5`}>
                                <a href="/"
                                   className="px-2 py-2 border border-white lato-text font-bold text-white bg-[#668A49] hover:text-[#668A49] hover:bg-white text-[12px] leading-[17px]">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default memo(ClearFix);