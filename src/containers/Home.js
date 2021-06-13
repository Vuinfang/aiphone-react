import React from 'react';
import Header from "../components/Header";
import HomeSwiper from "../components/HomeSwiper";
import SecondBox from "../components/SecondBox";
import ThirdBox from "../components/ThirdBox";
import Footer from "../components/Footer";
import '../assets/css/style.css';


const Home = (props) => {
    return (
        <div>
            <Header/>
            <HomeSwiper/>
            <SecondBox/>
            <ThirdBox/>
            <Footer/>
    </div>
    );
}

export default Home;
