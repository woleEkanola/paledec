import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WorksStyleOne from '../components/Portfolio/WorksStyleOne';
import WorksStyleTwo from '../components/Portfolio/WorksStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import dynamic from 'next/dynamic';
import BlogGridThree from '../components/Blog/BlogGridThree';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Pahesa extends Component {
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="PAHESA" 
                    BGImage="bg-one"
                />  

<section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img2.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About PAHESA</h2>
                                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>What its stands for</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>

                        m                                                                                                                                                                                                                                                           <div className="about-text">
                                        <h4>Our Success</h4>
                                        <ul>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                It is a long established fact that a reader will be distracted by the readable.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogGridThree />

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='MoHnqB04BS8' 
                        onClose={() => this.setState({isOpen: false})} 
                    />


                </section>
              
                
                <Footer />
            </>
        );
    }
}

export default Pahesa;