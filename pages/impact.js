import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PricingStyleTwo from '../components/Pricing/PricingStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Impact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Our Impact" 
                    BGImage="bg-four"
                />  

             
             <h1>Our Impact</h1>


                <Footer />
            </>
        );
    }
}

export default Impact;