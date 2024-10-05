import React from "react";
import SpicesImgData from "./data/SpicesImageData";
import { getProductOrigin } from "./utility/DataUtility";

export default function AboutProduct(props) {
    const ExportData = getProductOrigin(props.subCategory , props.exportDataKey);
    const aboutData = getProductOrigin(props.subCategory , props.aboutDataKey);
    return (
        <div style={{textAlign: "justify" , textJustify: "inter-word"}} className="mb-[15px] lato-text font-normal text-[15px] leading-[23px] text-[#555]">
            <img src={SpicesImgData[props.subCategory]} alt={props.subCategory}
                 className={`float-left lg:w-[230px] w-full lg:pr-[20px] pr-0 transition-transform duration-300 ease-in-out transform hover:scale-90`}/>
            {
                ExportData && (
                    <>
                        <span dangerouslySetInnerHTML={{__html: ExportData}}/>
                        <br/>
                        <br/>
                    </>
                )
            }
            <span dangerouslySetInnerHTML={{__html: aboutData}}/>
        </div>
    )
}