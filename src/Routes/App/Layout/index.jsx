

import * as React from 'react';
import Header from './Header/index'
import SideMenu from './SideMenu';
import Footer from './Footer/index'
import AddressSection from './AddressSection/index';
import Portfolio from "./Portfolio/index"
import './container.css'
import FAQ from './FAQ/index'
function MainContainer({ RoutesPages }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const changeHeaderToSideBar = () => {
        if (mobileOpen) setMobileOpen(false)
        else setMobileOpen(true)
    };
    return (
        <div className='container'>
            <Header changeHeaderToSideBar={changeHeaderToSideBar} />
            <SideMenu changeHeaderToSideBar={changeHeaderToSideBar} mobileOpen={mobileOpen} />
            {/* about, blogs etc pages will render accordinly by rounting  */}
            {RoutesPages} 
            <Portfolio />
            <FAQ />
            <AddressSection />
            <Footer />
        </div>
    );
}

export default MainContainer;
