import React from "react";
import check from "./assets/check.svg";
import {getProductOrigin} from "./utility/DataUtility";

export default function ProductBenefits(props) {
    const benefitsArray = getProductOrigin(props.subCategory , props.dataKey);
    return (
        <div>
            <h4 className={`mb-[20px] oswald-text text-[rgb(31,45,107)] font-normal text-custom-gray text-[27px] leading-[27px]`}>{`Benefits of ${props.titleKey}`}</h4>
            <div className={`lato-text font-normal text-[#555555] text-[15px] leading-[23px]`}>
                <ul>
                    {Object.keys(benefitsArray).map((key) => (
                        <li className="flex" key={key}>
                            <img src={check} className="w-4 h-4 mt-1" alt="check" />
                            <span className="text-justify ml-2">{benefitsArray[key]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}