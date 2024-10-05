import React from 'react';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Construction from './assets/construction.svg';

export default function ComingSoon() {
    const location = useLocation();
    if (location.pathname === '/coming') {
        document.body.style.overflow = 'hidden';
    }

    const manageScroll = () => {
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="card-body bg-white rounded-lg shadow-lg w-96 p-6 lg:mx-0 mx-[20px]">
                <div className="mt-4 flex items-center ">
                    <img src={Construction} alt="construction" className="hidden lg:block w-6 h-6 mb-[25px]"  />
                    <p className="pb-2 ml-2 font-normal text-[20px] mb-[20px] leading-[30px] text-[rgb(68,68,68)] oswald-text">Coming Soon! Stay tuned for updates...</p>
                </div>
                <div className={`flex justify-center`}>
                    <Link onClick={manageScroll} to="/" className={` px-5 py-4 rounded-sm bg-[#92c02c] text-white lato-text font-semibold text-[12px] leading-[17px]`}>
                        Go back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}