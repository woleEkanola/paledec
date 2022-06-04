import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';
import { body, react as AboutContent } from '../content/about.md';
 


class Aabout extends Component {
    render() {

        
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
                                <div className="blog-details grd">
                                    

                                    <div className="article-content">
                                        {/* <ReactMarkdown>
                                            {body}
                                        </ReactMarkdown> */}

                                        <AboutContent />
                                      
                                    </div>
                                    <div className="article-img">
                                        <img src="/img/paledec_africa.png" alt="image" />
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