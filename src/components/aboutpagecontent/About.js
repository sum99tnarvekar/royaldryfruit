import React, {memo} from "react";
import Banner from "../banner/Banner";
import AboutBlog from "./aboutblog/AboutBlog";
import ClearFix from "./clearfix/ClearFix";
import SuccessSlider from "./successslider/SuccessSlider";

const About = () => {
    return (
        <>
            <Banner headline="About Us  Manufacturer & Exporter" subheadline="Company Profile" />
            <AboutBlog/>
            <ClearFix/>
            <SuccessSlider/>
        </>
    )
}

export default memo(About);