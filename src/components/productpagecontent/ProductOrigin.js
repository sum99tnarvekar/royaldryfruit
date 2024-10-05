import React from "react";
import { getProductOrigin } from "./utility/DataUtility";

export default function ProductOrigin(props) {
    const originDefination = getProductOrigin(props.subCategory , props.dataKey);
    return (
            <p dangerouslySetInnerHTML={{ __html: originDefination }} className="mb-[15px] text-justify lato-text font-normal text-[15px] leading-[23px] text-[#555]" />
    )
}