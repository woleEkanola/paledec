import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import dynamic from 'next/dynamic';

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

                {/* <PageBanner 
                    pageTitle="PAHESA" 
                    BGImage="bg-one"
                />   */}

<section className="about-area ptb-100 space-above">
                    <div className="contnt">
                        
                                        <h2>About PAHESA</h2>
                                        <p>PAHESA is an annual event conceived to identify pertinent issues in Africa with a view to providing a holistic and multi-dimensional approach to sustainable peace and development in Africa. The event draws the attention of policymakers and highly recognized leaders in various sectors of industry, government, business, and humanity from different countries&nbsp;to identify the barriers to humanitarian issues, peace, and social-economic development in Africa and provide effective and innovative ways of addressing such issues.</p>
<p>Previous editions have been held in Accra, Ghana (2015); Dubai UAE (2016), and Dar Es Salaam, Tanzania (2017) with over 4,800 participants from 43 different countries including Former Heads of State, Royalty, Celebrities as well as business leaders from around Africa. The summit offers a combination of exhibition space, keynote address, and panel discussion designed to promote a better understanding of multifaceted challenges confronting Africa. </p>
                                         </div>

                
                  

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