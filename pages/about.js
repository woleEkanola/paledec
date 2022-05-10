import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';
import { attributes, react as AboutContent } from '../content/about.md';
import ReactMarkdown from 'react-markdown' 


class Aabout extends Component {
    render() {

        const {about_text} = attributes
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="About Us" 
                    BGImage="bg-four"
                />  

<div className="container">
                        <div className="row">

                        <div className="col-lg-12 col-md-12">
                                <div className="blog-details">
                                    <div className="article-img">
                                        <img src="/images/abt3.jpg" alt="image" />
                                    </div>

                                    <div className="article-content">
                                        <ReactMarkdown>
                                            {about_text}
                                        </ReactMarkdown>
                                      
                                    </div>
                                </div>

                          

                              
{/* <p>Page content is currently being updated... Checkback shortly</p> */}
                            </div>


                        </div>
                        </div>


                        <CtaAreaTwo />
                <Footer/>
            </>
        );
    }
}

export default Aabout;