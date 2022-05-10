import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import { react as ImpactContent } from '../content/impact.md';
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

                <ImpactContent />
       </div>
    </section>
             


                <Footer />
            </>
        );
    }
}

export default Impact;