import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <section className="about-area ptb-100 space-above">
                    <div className="contnt">

                {/* <ContactInfo /> */}
                
                <ContactForm contact={true} />

                <div className="ptb-100">
                
                </div>
                </div>
            </section>


                <Footer/>
            </>
        );
    }
}

export default Contact;