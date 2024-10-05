import React from "react";

export default function ProductPageIntro(Props) {
    return (
        <div
            className={`font-normal text-[20px] mb-[20px] leading-[30px] text-[rgb(68,68,68)] oswald-text`}>
            <h2>{`Indian ${Props.titleKey} Exporters, Buy Indian ${Props.titleKey} from India, Indian Dry ${Props.titleKey} Exporters in India, Best Price of Indian ${Props.titleKey} available with Royaldivine Produce Products LLP.`}</h2>
            <h2 className="mt-5">{`Royaldivine Produce Products LLP is a leading Exporter of Indian ${Props.titleKey}, Indian ${Props.titleKey} are Supplied & Exported to United Arab Emirates (UAE), Oman, Kuwait, Qatar, USA, UK, Canada, Australia, Czech Republic, Switzerland and European Countries`}</h2>
        </div>
    )
}