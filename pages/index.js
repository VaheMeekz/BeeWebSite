import React from 'react';
import Hearder from "./src/components/header/hearder";
import Tec from "./src/components/tecknologies/tec";
import About from "./src/components/about/about";
import Softwear from "./src/components/softwear/softwear";
import Portfolio from "./src/components/potrfolio/portfolio";
import Digital from "./src/components/digital/digital";
import Team from "./src/components/team/team";
import Footer from "./src/components/footer/footer";
import {BrowserRouter} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <BrowserRouter>
            <Hearder/>
            <About/>
            <Softwear/>
            <Portfolio/>
            <Tec/>
            <Digital/>
            <Team/>
            <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Index;