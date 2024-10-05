import React from 'react';
import './css/Footer.css';
import indeed from './assets/indeed-svgrepo-com.svg';
import twitter from './assets/twitter-color-svgrepo-com.svg';
import facebook from './assets/facebook-color-svgrepo-com.svg';
import google from './assets/google-plus-3-logo-svgrepo-com.svg';
import captcha from './assets/CaptchaSecurityImages.jpeg';
import logo from './assets/logo.png';

export default function Footer() {
    return (
        <footer className="subfooter-container container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-[#333] md:p-[3rem]">
            <div>
                <div>
                    <h3 className="text-center oswald-text font-thin text-white text-[22px] leading-[33px]">
                        ABOUT US
                    </h3>
                    <p className={`text-center lato-text font-normal text-[#888] text-[14px] leading-[21px]`}>
                        We are unequivocally dedicated to give quality products and operations to our customers before
                        conferred time span. Our workforce and experienced group are exclusively in charge of
                        development and achievement of association.
                    </p>
                    <div className={`mt-10 flex justify-center`}>
                        <a href="/"
                           className={`flex flex-col items-center mx-4 lato-text font-normal text-[#aaa] text-[10px] leading-[30px] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>
                            <img src={facebook} className={`w-5 h-5`} alt="facebook"/>
                            <span>LIKE US</span>
                        </a>
                        <a href="/"
                           className={`flex flex-col items-center mx-4 lato-text font-normal text-[#aaa] text-[10px] leading-[30px] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>
                            <img src={indeed} className={`w-5 h-5`} alt="indeed"/>
                            <span>FOLLOW US</span>
                        </a>
                        <a href="/"
                           className={`flex flex-col items-center mx-4 lato-text font-normal text-[#aaa] text-[10px] leading-[30px] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>
                            <img src={google} className={`w-5 h-5`} alt="google"/>
                            <span>PLUS 1 US</span>
                        </a>
                        <a href="/"
                           className={`flex flex-col items-center mx-4 lato-text font-normal text-[#aaa] text-[10px] leading-[30px] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>
                            <img src={twitter} className={`w-5 h-5`} alt="twitter"/>
                            <span>FOLLOW US</span>
                        </a>
                    </div>
                    <div className={`mt-10 w-full flex flex-wrap justify-between`}>
                        <div className={`md:w-[49%] w-full p-5`}>
                            <h3 className="text-center oswald-text font-thin text-white text-[22px] leading-[33px]">
                                QUICK LINKS
                            </h3>
                            <div className={`mt-10`}>
                                <div className={`flex flex-wrap justify-center md:justify-between mt-2`}>
                                    <a href="/"
                                       className={`mx-4 my-1 lato-text font-semibold text-[13px] leading-[20px] text-[#aaa] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>Home</a>
                                    <a href="/"
                                       className={`mx-4 my-1 lato-text font-semibold text-[13px] leading-[20px] text-[#aaa] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>About
                                        Us</a>
                                    <a href="/"
                                       className={`mx-4 my-1 lato-text font-semibold text-[13px] leading-[20px] text-[#aaa] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>Products</a>
                                    <a href="/"
                                       className={`mx-4 my-1 lato-text font-semibold text-[13px] leading-[20px] text-[#aaa] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>Quality</a>
                                    <a href="/"
                                       className={`mx-4 my-1 lato-text font-semibold text-[13px] leading-[20px] text-[#aaa] hover:text-[#92c02c] transition-all duration-300 ease-in-out`}>Contact
                                        Us</a>
                                </div>
                            </div>
                            <div className={`mt-10 flex justify-center form-container`}>
                                <img src={logo} className={`m-[63px]`} alt="logo"/>
                            </div>
                            <div className={`md:block hidden mt-10 text-center`}>
                                <div className={`lato-text font-normal text-[#999] text-[12px] leading-[18px]`}>
                                    © Copyrights
                                    <span className={`text-[#92c02c]`}> Royaldivine Produce Products LLP </span>
                                    2024. All rights reserved.
                                </div>
                            </div>
                        </div>
                        <div className={`md:w-[49%] w-full p-5`}>
                            <h3 className="text-center oswald-text font-thin text-white text-[22px] leading-[33px]">
                                ENQUIRY FORM
                            </h3>
                            <div className={`w-full mt-10`}>
                                <form className={``}>
                                    <div className={`w-full flex flex-wrap justify-between mb-5`}>
                                        <input className={`md:w-[48%] w-full px-2 py-3 md:my-0 my-5`} type="text"
                                               placeholder={`Your Name`}/>
                                        <input className={`md:w-[48%] w-full px-2 py-3`} type="text"
                                               placeholder={`Your Phone`}/>
                                    </div>
                                    <div className={`w-full mb-5`}>
                                        <input className={`w-full px-2 py-3`} type="text" placeholder={`Your Email`}/>
                                    </div>
                                    <div className={`w-full flex justify-between mb-5`}>
                                        <img src={captcha} className={`mr-2`} alt={`captcha`}/>
                                        <input className={`w-[77%] px-2 py-3`} type="text"
                                               placeholder={`Security Code`}/>
                                    </div>
                                    <div className={`w-full mb-5`}>
                                        <textarea className={`w-full px-2 py-3 bg-[#333] border border-[#aaa]`} rows="3"
                                                  placeholder={`Message`}/>
                                    </div>
                                    <div className={`flex justify-center`}>
                                        <button
                                            className={` px-5 py-4 rounded-sm bg-[#92c02c] text-white lato-text font-semibold text-[14px] leading-[19px]`}>SEND
                                            MESSAGE
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className={`md:hidden block mt-10 text-center`}>
                                <div className={`lato-text font-normal text-[#999] text-[12px] leading-[18px]`}>
                                    © Copyrights
                                    <span className={`text-[#92c02c]`}> Royaldivine Produce Products LLP </span>
                                    2024. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}


