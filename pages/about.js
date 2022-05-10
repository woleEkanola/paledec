import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';


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
                                <div className="blog-details">
                                    <div className="article-img">
                                        <img src="/images/abt3.jpg" alt="image" />
                                    </div>

                                    <div className="article-content">
                                 
                                   <p>The Pan African Leadership and Entrepreneurship Development Centre (PALEDEC) is a community-focused Leadership, social entrepreneurship and capacity development charitable organization founded as a global initiative aimed to improve the lives of millions of youth and the vulnerable by putting them on the path to self-sufficiency, economic productivity while fostering community resilience. For the past 4 years of existence.</p>
<p>The Pan African Leadership and Entrepreneurship Development Centre has directly impacted over 9,000 people through our unique programmes and the continued commitment of individuals, schools, corporate organizations, mentors, sponsors and partners who share our passion in raising generations of transformational leaders and entrepreneurs across Africa.</p>
<p>The offices of the center are presently located in Morocco, Nigeria, Tanzania and Swaziland.</p>
<p>These are other events and programs initiated and produced by Pan African Leadership and Entrepreneurship Development Centre, organizers of the Ghanaian Child Summits and Awards.</p>
                                        
                                      
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