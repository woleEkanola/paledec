import React, { Component } from 'react';
import Link from 'next/link';

class OurWorks extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row justify-content-center">
            
                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg4">
                                    <div className="content">
                                        <span>
                                            <Link href="/pahesa">
                                                <a>PAHESA</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/pahesa">
                                                <a>Pan-African Humaniterian and Enterpreneural Summit</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/pahesa">
                                        <a className="btn btn-primary">View Past Events</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape4.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg5">
                                    <div className="content">
                                        <span>
                                            <Link href="/child-summit">
                                                <a>Child Summit</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/child-summit">
                                                <a>Child Summit</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/child-summit">
                                        <a className="btn btn-primary">View Past Events</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape5.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg6">
                                    <div className="content">
                                        <span>
                                            <Link href="/fbi">
                                                <a>FBI</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/fbi">
                                                <a>FBI Magazine</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/fbi">
                                        <a className="btn btn-primary">View past editions</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape6.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-work">
                            <Link href="/impact">
                                <a className="btn btn-primary">Check out our Impact </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurWorks;