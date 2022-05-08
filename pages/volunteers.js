import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import ContactForm from '../components/Contact/ContactForm';


class Volunteers extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Volunteers" 
                    BGImage="bg-one"
                />  

<ContactForm />

                <Footer />
            </>
        );
    }
}

export default Volunteers;