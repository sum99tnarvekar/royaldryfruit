import React, {memo} from 'react';
import qualityproduct from "./assets/puls1.png";

const QualityBlog = () => {
    return (
        <div className={`container-shadow w-full p-[10px] md:p-[3rem] xl:w-[1170px] xl:mx-auto bg-white`}>
            <div>
                <div className={`mb-[20px] pb-[10px]`}>
                    <h3 className="mb-[10px] oswald-text font-normal text-[33px] leading-[33px] text-[#444]">Quality</h3>
                </div>
                <div className={`w-full flex flex-wrap items-center justify-between`}>
                    <div className={`lg:w-[70%] w-full pr-0 lg:pr-[50px]`}>
                        <p className="mb-[15px] text-justify lato-text font-normal text-[14px] leading-[21px] text-[#555]">
                            Royaldivine Produce Products LLP show a fine quality which comes to you in a universal
                            quality
                            pack that guarantees freshness and cleanliness. This result of our own is rich in protein
                            and
                            its day by day utilization will significantly enhance the nutritive estimation of the eating
                            regimen.
                        </p>
                        <p className="mb-[15px] text-justify lato-text font-normal text-[14px] leading-[21px] text-[#555]">
                            We have faith in offering our clients just quality items. The items we offer are protected
                            to
                            expend and took care of in a to a great degree proficient way. Likewise, we keep up
                            appropriate
                            ventilation and cleanliness in the capacity units and distribution centers. Periodical
                            nuisance
                            control exercises are likewise done so that lone crisp, unadulterated and wholesome items
                            are
                            offered to the customers.
                        </p>
                        <p className="mb-[15px] text-justify lato-text font-normal text-[14px] leading-[21px] text-[#555]">
                            The whole item range is made utilizing characteristic fixings. We are preparing in a cutting
                            edge plant, which is deliberately situated with bottomless material and laborassets
                        </p>
                        <p className="mb-[15px] text-justify lato-text font-normal text-[14px] leading-[21px] text-[#555]">
                            From sourcing the finest fixings to handling and pressing, we have actualized orderly quality
                            affirmation frameworks coordinating global quality standards. We are resolved to deliver hygienic
                            and predominant quality sustenance items for the complete fulfillment of clients by utilizing
                            quality crude materials.
                        </p>

                    </div>
                    <div className={`lg:w-[30%] w-full flex justify-center`}>
                        <img src={qualityproduct} alt="qualityproduct"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(QualityBlog);