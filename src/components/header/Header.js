import 'animate.css';
import React, {useState} from 'react';
import "./css/Header.css";
import logo from './assets/logo.png';
import downArrow from './assets/down-arrow.svg'
import rightArrow from './assets/right-arrow.svg'
import {Link} from "react-router-dom";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
        console.log(submenuOpen)
    };

    const handleSideMenu = () => {
        if(sidebarOpen) setSidebarOpen(false);
        else setSidebarOpen(true);
    }
    return (
        <header className="w-full md:w-full xl:w-[1170px] xl:mx-auto container-shadow">
            <div onClick={() => handleSideMenu()} className={`fixed top-[10px] left-[10px] z-50`}>
                <button className={`block rounded ${sidebarOpen ? 'bg-[#e42329]' : 'bg-[#92c02c]' } p-2.5 text-white transition md:hidden`}>
                    <span className="sr-only">Toggle menu</span>
                    <div className={`hamburger ${sidebarOpen ? 'hamburger-open' : ''}`}>
                        <div className="hamburger-line line1"></div>
                        <div className="hamburger-line line2"></div>
                        <div className="hamburger-line line3"></div>
                    </div>
                </button>
            </div>
            <div className="flex items-center justify-between w-full bg-white px-[3rem]">
                <div className={`flex justify-center md:justify-start flex-1`}>
                    <img src={logo} alt="logo" className={`lg:w-[233px] lg:h-[114px] md:w-[92px] md:h-[45px] w-[233px] h-[114px]`} />
                </div>
                <div className="hidden md:flex top_nav_links">
                    <ul className="flex">
                        <li className="lato-text font-bold text-sm text-gray-700 leading-[38px] lg:px-4 px-2 lg:py-1 mr-1 lg:border border-gray-200 rounded-md transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c]">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="lato-text font-bold text-sm text-gray-700 leading-[38px] lg:px-4 px-2 lg:py-1 mr-1 lg:border border-gray-200 rounded-md transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c]">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="relative group lato-text font-bold text-sm text-gray-700 leading-[38px] lg:px-4 px-2 lg:py-1 mr-1 lg:border border-gray-200 rounded-md transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c]">
                            <Link to="#" className={`flex items-center`}>
                                <span>Products</span>
                                <img src={downArrow} className="arrow-icon transition-transform duration-300"
                                     style={{height: '18px', width: '18px', marginLeft: '3px'}}
                                     alt="down-arrow"/>
                            </Link>

                            {/* Sub-menu */}
                            <ul className="sub-menu z-40 absolute top-[39px] bg-[#92c02c] text-white shadow-md mt-2">
                                <li className="child-group text-sm px-4 py-3 shadow-md whitespace-nowrap">
                                    <Link to="/product/spices&red_chilly" className="flex items-center justify-between">
                                        <span>Spices</span>
                                        <img src={rightArrow} style={{
                                            height: '18px',
                                            width: '18px',
                                            marginLeft: '3px'
                                        }} alt=""/>
                                    </Link>
                                    <ul className="subchild-menu bg-[#92c02c] text-white shadow-md absolute top-0 left-[230px] w-[230px] mt-0">
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&red_chilly">Red Chilly (Chillies)</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&turmeric_powder">Turmeric Powder</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&curry_powder">Curry Powder</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&coriander_seeds">Coriander Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&fenugreek_seeds">Fenugreek Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&fennel_seeds">Fennel Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&dill_seeds">Dill Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&cummic_seeds">Cumin Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&black_pepper">Black Pepper</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&tejpatta_leaves">Tejpatta (Bay) Leaves</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&ajwain">Ajwain</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&cardamon">Cardamom (Elaichi)</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&nutmeg">Nutmeg</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&celery_seeds">Celery Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&mustard_seeds">Mustard Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&nigella_seeds">Nigella Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&annatto_seeds">Annatto Seeds</Link></li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap"><Link to="/product/spices&galanjal_roots">Galangal (Ginger) Roots</Link></li>
                                    </ul>
                                </li>
                                <li className="child-group text-sm px-4 py-3 shadow-md whitespace-nowrap w-[230px]">
                                    <Link to="/coming" className="flex items-center justify-between">
                                        <span>Oil Seeds</span>
                                        <img src={rightArrow} style={{
                                            height: '18px',
                                            width: '18px',
                                            marginLeft: '3px'
                                        }} alt=""/>
                                    </Link>
                                    <ul className="subchild-menu bg-[#92c02c] text-white shadow-md absolute top-0 left-[230px] w-[230px] mt-0">
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Natural Sesame Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Hulled Sesame Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Black Sesame Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Golden Sesame Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Brown Sesame Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Niger Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Sunflower Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Cotton Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Flax Seeds (Linseed)</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="child-group text-sm px-4 py-3 shadow-md whitespace-nowrap w-[230px]">
                                    <Link to="/coming" className="flex items-center justify-between">
                                        <span>Pulses and Grains</span>
                                        <img src={rightArrow} style={{
                                            height: '18px',
                                            width: '18px',
                                            marginLeft: '3px'
                                        }} alt=""/>
                                    </Link>
                                    <ul className="subchild-menu bg-[#92c02c] text-white shadow-md absolute top-0 left-[230px] w-[230px] mt-0">
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chick Peas</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Moong Dal</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Urad Dal</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chana Dal</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Toor Dal</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Masoor Dal</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Rice</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Bajra</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Jowar</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Black Eyed Pea</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="child-group text-sm px-4 py-3 shadow-md whitespace-nowrap w-[230px]">
                                    <Link to="/coming" className="flex items-center justify-between">
                                        <span>Dry Fruits</span>
                                        <img src={rightArrow} style={{
                                            height: '18px',
                                            width: '18px',
                                            marginLeft: '3px'
                                        }} alt=""/>
                                    </Link>
                                    <ul className="subchild-menu bg-[#92c02c] text-white shadow-md absolute top-0 left-[230px] w-[230px] mt-0">
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Apricots</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Almonds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Black Raisins with seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Brown Walnuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Cashew Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Cardamom Elaichi</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Cheese Cashew Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chilgoza with cover</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chilgoza without cover</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chilli Cashew nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chutney Cashew Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Cinnamon</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Clove</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Cranberry</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Dates</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Del-Monte Prunes</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Flavoured Cashew Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Green Afghan Raisins</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Hazel Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Honey Amla</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Irani Mamra Almond</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Jumbo Anjeer</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Macadamia Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Malamaal Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Mix Dry Fruits</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Pista</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Pecan Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Plain Pista</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Prunes</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Pudina Cashew Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Raisins</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Salted Cashew Nuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Salted Pista</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Silver Elaichi</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Stone Chocolate</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Sunflower Seeds</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Sunsweet Prunes</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Wet Apricot</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">White Walnuts</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Walnuts</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="child-group text-sm px-4 py-3 shadow-md whitespace-nowrap w-[230px]">
                                    <Link to="/coming" className="flex items-center justify-between">
                                        <span>Food Products</span>
                                        <img src={rightArrow} style={{
                                            height: '18px',
                                            width: '18px',
                                            marginLeft: '3px'
                                        }} alt=""/>
                                    </Link>
                                    <ul className="subchild-menu bg-[#92c02c] text-white shadow-md absolute top-0 left-[230px] w-[230px] mt-0">
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Papad</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Pickle</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Chutney</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Mukhwas</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Makhana</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Jaggery</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="child-group text-sm px-4 py-3 shadow-md whitespace-nowrap w-[230px]">
                                    <Link href="/coming" className="flex items-center justify-between">
                                        <span>Herbs</span>
                                        <img src={rightArrow} style={{
                                            height: '18px',
                                            width: '18px',
                                            marginLeft: '3px'
                                        }} alt=""/>
                                    </Link>
                                    <ul className="subchild-menu bg-[#92c02c] text-white shadow-md absolute top-0 left-[230px] w-[230px] mt-0">
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Senna Leaves</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Rose Flowers/Petals</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Tukmaria</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Senna Pods</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Basil</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Oregano</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Mace</Link>
                                        </li>
                                        <li className="px-4 py-3 shadow-md whitespace-nowrap">
                                            <Link to="/coming">Yellow Myrabolan</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="lato-text font-bold text-sm text-gray-700 leading-[38px] lg:px-4 px-2 lg:py-1 mr-1 lg:border border-gray-200 rounded-md transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c]">
                            <Link to="/gifting">Corporate Gifting</Link>
                        </li>
                        <li className="lato-text font-bold text-sm text-gray-700 leading-[38px] lg:px-4 px-2 lg:py-1 mr-1 lg:border border-gray-200 rounded-md transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c]">
                        <Link to="/quality">Quality</Link>
                        </li>
                        <li className="lato-text font-bold text-sm text-gray-700 leading-[38px] lg:px-4 px-2 lg:py-1 mr-1 lg:border border-gray-200 rounded-md transition-all duration-300 ease-in-out hover:bg-[#92c02c] hover:text-white hover:border-[#92c02c]">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/*small device side bar*/}
            {
                sidebarOpen &&
                <div className={'md:hidden'}>
                    <div
                        className={`fixed inset-y-0 left-0 z-50 w-[268px] ${submenuOpen ? 'h-[583.8px]' : 'h-[383.8px]'} bg-black top-[88px] transform p-8 shadow-lg transition-transform duration-500 ${sidebarOpen ? 'sidebar-enter' : 'sidebar-exit hold-position'}`}></div>
                    <div
                        className={`fixed inset-y-0 left-0 z-50 w-64 h-fit bg-[#92c02c] top-[78px] transform p-8 shadow-lg transition-transform duration-500 ${sidebarOpen ? 'sidebar-enter' : 'sidebar-exit hold-position'}`}>
                        <ul>
                            <li className={`lato-text font-bold text-lg text-white py-3 border-b border-gray-300`}>
                                <a href="/">Home</a>
                            </li>
                            <li className={`lato-text font-bold text-lg text-white py-3 border-b border-gray-300`}>
                                <a href="/about">About Us</a>
                            </li>
                            <li onClick={toggleSubmenu} className={`lato-text font-bold text-lg text-white py-3 border-b border-gray-300`}>
                                <div className={`flex items-center justify-between`}>
                                    <span>Products</span>
                                    <img src={rightArrow} style={{
                                        height: '20px',
                                        width: '20px',
                                        marginTop: '3px',
                                        marginLeft: '3px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    }} alt="rightarrow"/>
                                </div>
                                {/* Submenu with transition */}
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        submenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                    style={{ transitionProperty: 'max-height, opacity' }}
                                >
                                    <ul className="bg-[#92c02c] text-white mt-2">
                                        <li className="child-group text-sm px-4 py-3 whitespace-nowrap">
                                            <Link to="/product/spices&red_chilly" className="flex items-center justify-between">
                                                <span className={`border-b-2 border-gray-300`}>Spices</span>
                                            </Link>
                                        </li>
                                        <li className="child-group text-sm px-4 py-3 whitespace-nowrap w-[230px]">
                                            <Link to="/coming" className="flex items-center justify-between">
                                                <span className={`border-b-2 border-gray-300`}>Oil Seeds</span>
                                            </Link>
                                        </li>
                                        <li className="child-group text-sm px-4 py-3 whitespace-nowrap w-[230px]">
                                            <Link to="/coming" className="flex items-center justify-between">
                                                <span className={`border-b-2 border-gray-300`}>Pulses and Grains</span>
                                            </Link>
                                        </li>
                                        <li className="child-group text-sm px-4 py-3 whitespace-nowrap w-[230px]">
                                            <Link to="/coming" className="flex items-center justify-between">
                                                <span className={`border-b-2 border-gray-300`}>Dry Fruits</span>
                                            </Link>
                                        </li>
                                        <li className="child-group text-sm px-4 py-3 whitespace-nowrap w-[230px]">
                                            <Link to="/coming" className="flex items-center justify-between">
                                                <span className={`border-b-2 border-gray-300`}>Food Products</span>
                                            </Link>
                                        </li>
                                        <li className="child-group text-sm px-4 py-3 whitespace-nowrap w-[230px]">
                                            <Link href="/coming" className="flex items-center justify-between">
                                                <span className={`border-b-2 border-gray-300`}>Herbs</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li className={`lato-text font-bold text-lg text-white py-3 border-b border-gray-300`}>
                                <a href="/gifting">Corporate Gifting</a>
                            </li>
                            <li className={`lato-text font-bold text-lg text-white py-3 border-b border-gray-300`}>
                                <a href="/quality">Quality</a>
                            </li>
                            <li className={`lato-text font-bold text-lg text-white py-3 border-b border-gray-300`}>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </header>
    );
}


