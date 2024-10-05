import React, {memo} from "react";
import TabPanel from "./tabpanel/TabPanel";
import ProductsLlp from "./productsllp/ProductsLlp";
import BannerSlider from "./bannerslider/BannerSlider";
import ProductSlider from "./productsslider/ProductSlider";
import SpecialProductSlider from "./productsslider/SpecialProductSlider";

const Home = () => {
    return (
        <>
            <BannerSlider/>
            <ProductsLlp/>
            <TabPanel/>
            <ProductSlider/>
            <SpecialProductSlider/>
        </>
    )
}

export default memo(Home);