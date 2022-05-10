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
    <section className="about-area ptb-100 space-by-left">
       
       <div className='contnt'>

        <h1>
            Our Impact
        </h1>

<p>We are committed to driving prosperity to Africa by facilitating long-term relationships that increases diverse trade and investment opportunities in Africa.</p>
       </div>
    </section>
             


                <Footer />
            </>
        );
    }
}

export default Impact;