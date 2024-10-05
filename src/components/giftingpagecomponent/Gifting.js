import React, {memo} from 'react';
import Banner from "../banner/Banner";
import GiftingExporter from "./giftingexporter/GiftingExporter";

const GiftingPage = () => {
    return (
        <>
            <Banner headline="Corporate Gifting  Manufacturer & Exporter" subheadline="Corporate Profile" />
            <GiftingExporter />
        </>
    )
}

export default memo(GiftingPage);