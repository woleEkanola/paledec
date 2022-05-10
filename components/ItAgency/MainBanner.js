import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {

        const {banner,  banner_youtubevideoId,banner_button_1_Text, banner_button_2_Text, banner_button_1_link} =this.props.x

        return (
            <>
                <div className="hero-banner it-banner overly hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <h1  className='banner-title'><span>Facilitating Prosperity in</span> AFRICA </h1>
                                                
                                            <p> {banner}</p>
                                        
                                            <Link href={`/${banner_button_1_link}`}>
                                                <a className="btn btn-primary">{banner_button_1_Text} </a>
                                            </Link>

                                            <Link href="/#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="btn btn-secondary"
                                                > 
                                                    <i className="icofont-ui-play"></i>  {banner_button_2_Text}
                                                </a>
                                            </Link>
                                        </div> 
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/animate-banner-img1.jpg" alt="Animate image" />
                                        </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId={banner_youtubevideoId}
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;