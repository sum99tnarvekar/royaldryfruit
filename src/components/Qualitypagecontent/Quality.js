import React, {memo} from 'react';
import Banner from "../banner/Banner";
import QualityBlog from "./qualityblog/QualityBlog";

const Quality = () => {
    return (
        <>
            <Banner headline="Quality  Manufacturer & Exporter" subheadline="Exporter of Best Quality Dry Fruits, Pulses & Spices!" />
            <QualityBlog/>
        </>
    )
}

export default memo(Quality);