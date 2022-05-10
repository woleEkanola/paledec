import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import dynamic from 'next/dynamic';
import { react as PAHISAImpactContent } from '../content/pahisa.md';


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
                    pageTitle="PAHISA" 
                    BGImage="bg-one"
                />   */}

<section className="about-area ptb-100 space-above">
                    <div className="contnt">
                        
                                        <h2>About PAHISA</h2>
<PAHISAImpactContent/>
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