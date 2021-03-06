import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/paladec.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                   
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Explore</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pahisa">
                                                <a>What we do</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/impact">
                                                <a>Our Impacts</a>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/pahisa">
                                                <a>PAHISA</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/fbi_magazine">
                                                <a>FBI Magazine</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/child_summit">
                                                <a>Child Summit </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/volunteers">
                                                <a>Volunteer</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                      
                                        <li>
                                        <i className="icofont-twitter"></i>
                                            <a href="#">@paledec</a>
                                        </li>
                                        <li>
                                        <i className="icofont-instagram"></i>
                                            <a href="#">@paledec_gram</a>
                                        </li>
                                        <li>
                                        <i className="icofont-facebook"></i>
                                            <a href="#">PALEDEC</a>
                                        </li>
                                        <li>
                                        <i className="icofont-email"></i>
                                        <a href="#">hello@paledec.org</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear}  -  paledec.org </p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;