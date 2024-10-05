import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import leaf from './assets/leaf.svg';
import space from './assets/space-shuttle-svgrepo-com.svg';
import vision from './assets/vision-svgrepo-com.svg';
import tabPanelData from "./TabPanelData";
import './css/TabPanel.css';

export default function TabPanel() {
    const [Data, setData] = useState(tabPanelData.find(item => item.key === 'about'));
    const [tabKey, setTabKey] = React.useState('about');

    const handleTab = (key) => {
        setTabKey(key);
    };

    useEffect(() => {
        const selectedData = tabPanelData.find(item => item.key === tabKey);
        setData(selectedData);
    }, [tabKey]);

    return (
        <div className="TabPanel-container container-shadow w-full md:w-full xl:w-[1170px] xl:mx-auto bg-white p-[10px] md:p-[3rem]">
            <div className="TabPanel-body flex xl:flex-nowrap flex-wrap gap-5 justify-center">
                <div className={`xl:w-[40%] w-full xl:h-[424.73px] h-full border border-[#f1f1f1]`}>
                    <div className="bg-[#f1f1f1] xl:h-[424.73px] h-full px-[15px] py-[80px]">
                        <div className={`w-[70%] mx-auto`}>
                            <h3 className="mb-[10px] font-normal text-[33px] leading-[33px] text-[#444444] oswald-text">
                                {Data.heading} <span className={`font-bold text-[#1f2d6b]`}>{Data.sub_heading}</span>
                            </h3>
                            <p className={`mb-[15px] lato-text font-normal text-gray-600 text-[15px] leading-[24px]`}>
                                {Data.tab_heading}
                            </p>
                            <p className={`lato-text font-normal text-gray-600 text-[17px] leading-[26px]`}>
                                {Data.tabContext}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`xl:w-[18%] w-full border-2 border-dotted border-[#f1f1f1] p-5`}>
                    <div className={`flex items-center justify-center h-full`}>
                        <ul className={`xl:block flex`}>
                            <li onClick={() => handleTab("about")} className={`border border-[#f1f1f1] ${tabKey === 'about' ? 'bg-[#92c02c] text-[#ffffff]' : 'bg-[#ffffff] text-[#1f2d6b]'} transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c] p-7 text-center`}>
                                <h4 className={`font-normal text-[17px] leading-[26px] oswald-text`}>
                                    <div className={`flex flex-col items-center`}>
                                        <img src={leaf} style={{height: '30px', width: '30px'}} alt="leaf"/>
                                        About Us
                                    </div>
                                </h4>
                            </li>
                            <li onClick={() => handleTab("vision")} className={`xl:my-1 my-0 xl:mx-0 mx-1 border border-[#f1f1f1] ${tabKey === 'vision' ? 'bg-[#92c02c] text-[#ffffff]' : 'bg-[#ffffff] text-[#1f2d6b]'} transition-all duration-300 ease-in-out hover:text-white hover:bg-[#92c02c] hover:border-[#92c02c] p-7 text-center`}>
                                <h4 className={`font-normal text-[17px] leading-[26px] oswald-text`}>
                                    <div className={`flex flex-col items-center`}>
                                        <img src={vision} style={{height: '30px', width: '30px'}} alt="vision"/>
                                        Vision
                                    </div>
                                </h4>
                            </li>
                            <li onClick={() => handleTab("mission")} className={`border border-[#f1f1f1] ${tabKey === 'mission' ? 'bg-[#92c02c] text-[#ffffff]' : 'bg-[#ffffff] text-[#1f2d6b]'} transition-all duration-300 ease-in-out hover:text-white hover:bg-[#92c02c] hover:border-[#92c02c] p-7 text-center`}>
                                <h4 className={`font-normal text-[17px] leading-[26px] oswald-text`}>
                                    <div className={`flex flex-col items-center`}>
                                        <img src={space} style={{height: '30px', width: '30px'}} alt="mission"/>
                                        Mission
                                    </div>
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`xl:w-[40%] w-full xl:h-[424.73px] h-full border border-[#f1f1f1]`}>
                    <div className="w-full h-full">
                        <TransitionGroup>
                            <CSSTransition
                                key={Data.img}
                                timeout={300}
                                classNames="fade"
                            >
                                <img className="w-full h-[424.75px] object-cover" src={Data.img} alt="tab-content"/>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
