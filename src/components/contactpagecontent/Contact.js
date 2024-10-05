import React, {useState} from 'react';
import Banner from "../banner/Banner";
import MailIcon from "./assets/mail.svg";
import OfficeIcon from "./assets/office.svg";
import captcha from './assets/CaptchaSecurityImages.jpeg';

export default function Contact() {
    const [verified, setVerified] = useState(false);

    const onReCAPTCHAChange = (value) => {
        if (value) {
            setVerified(true);
        }
    };

    return (
        <>
            <Banner headline="Contact Us Manufacturer & Exporter" subheadline={`Get in Touch with us on the below information`}/>
            <div
                className="contact-exporter container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white">
                <div>
                    <h3 className={`text-center oswald-text text-[33px] leading-[33px] text-[rgb(68,68,68)] font-normal`}>OUR <span
                        className={`text-[rgb(31,45,107)]`}>OFFICE</span></h3>
                </div>
                <div className="my-6 w-[20%] mx-auto">
                    <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                </div>
                <div className={`flex flex-col items-center`}>
                    <div className={`flex items-center mb-2`}>
                        <h1 className={`lato-text font-bold text-[14px] leading-[21px] text-[#555555]`}>For
                            Enquiry <span className={`text-[#92c02c]`}>Royaldivine Produce Products llp</span></h1>
                    </div>
                    <div className={`flex items-center mb-2`}>
                        <img src={OfficeIcon} alt="office icon" className="w-5 h-5 mr-2"/>
                        <h1 className={`lato-text font-bold text-[14px] leading-[21px] text-[#555555]`}>Mobile : <span
                            className={`text-[#92c02c]`}> +91-8451877725</span></h1>
                    </div>
                    <div className={`flex md:items-center mb-2`}>
                        <img src={MailIcon} alt="mail icon" className="w-5 h-4 mr-2"/>
                        <h1 className={`lato-text font-bold text-[14px] leading-[21px] text-[#555555]`}>Email : <span
                            className={`text-[#92c02c]`}> <a
                            href="mailto: sales@royaldryfruit.com">sales@royaldryfruit.com</a> / <a
                            href="mailto:sales@royaldivineproducts.com">sales@royaldivineproducts.com</a></span></h1>
                    </div>
                    <div className={`flex mb-2`}>
                        <img src={OfficeIcon} alt="address icon" className="w-5 h-5 mr-2"/>
                        <h1 className={`lato-text font-bold text-[14px] leading-[21px] text-[#555555]`}>Address : <span
                            className={`text-[#92c02c]`}> 405, Western Edge I, Western Express Highway, Borivali East, Mumbai, Maharashtra 400066</span>
                        </h1>
                    </div>
                </div>

                <div className={`mt-10`}>
                    <h3 className={`text-center oswald-text text-[33px] leading-[33px] text-[rgb(31,45,107)] font-normal`}>GET IN <span
                        className={`text-[rgb(68,68,68)]`}>TOUCH</span></h3>
                    <div className={`mt-10 lg:w-[70%] w-full mx-auto border-double border-4 border-[#ccc] p-5`}>
                        <form className={``}>
                            <div className={`w-full flex flex-wrap justify-between mb-5`}>
                                <input className={`md:w-[48%] w-full px-2 py-3 md:my-0 my-5 bg-white`} type="text"
                                       placeholder={`Your Name`}/>
                                <input className={`md:w-[48%] w-full px-2 py-3 bg-white`} type="text"
                                       placeholder={`Company Phone`}/>
                            </div>
                            <div className={`w-full flex flex-wrap justify-between mb-5`}>
                                <input className={`md:w-[48%] w-full px-2 py-3 md:my-0 my-5 bg-white`} type="text"
                                       placeholder={`Your Email`}/>
                                <input className={`md:w-[48%] w-full px-2 py-3 bg-white`} type="text"
                                       placeholder={`Your Phone`}/>
                            </div>
                            <div className={`w-full flex flex-wrap justify-between mb-5`}>
                                <input className={`md:w-[48%] w-full px-2 py-3 md:my-0 my-5 bg-white`} type="text"
                                       placeholder={`Your State`}/>
                                <input className={`md:w-[48%] w-full px-2 py-3 bg-white`} type="text"
                                       placeholder={`Your City`}/>
                            </div>
                            <div className={`w-full flex justify-between mb-5`}>
                                <input className={`w-[77%] px-2 py-3 bg-white`} type="text"
                                       placeholder={`Your Pincode`}/>
                                <img src={captcha} className={`mr-2 w-[125px]`} alt={`captcha`}/>
                            </div>
                            <div className={`w-full mb-5`}>
                                        <textarea className={`w-full px-2 py-3 bg-[#333] border border-[#aaa] bg-white`} rows="3"
                                                  placeholder={`Message`}/>
                            </div>
                            <div className={`flex`}>
                                <button
                                    className={` px-5 py-4 rounded-sm bg-[#92c02c] text-white lato-text font-semibold text-[14px] leading-[19px]`}>SEND
                                    MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}