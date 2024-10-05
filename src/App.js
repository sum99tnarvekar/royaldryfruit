import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/homepagecontent/Home";
import About from "./components/aboutpagecontent/About";
import Contact from "./components/contactpagecontent/Contact";
import Quality from "./components/Qualitypagecontent/Quality";
import Gifting from "./components/giftingpagecomponent/Gifting";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryGifting from "./components/giftingpagecomponent/giftingexporter/CountryGifting";
import Product from "./components/productpagecontent/Product";
import ComingSoon from "./components/comingsoonpagecontent/ComingSoon";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:variety" element={<Product />} />
                <Route path="/gifting" element={<Gifting />} />
                <Route path="/countygifting/:city" element={<CountryGifting />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/coming" element={<ComingSoon />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
