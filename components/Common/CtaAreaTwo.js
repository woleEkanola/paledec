import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <span>Are You Ready?</span>
                        <h3>PAHESA 2022 is here!</h3>
                    </div>

                    <div className="cta-btn-box">
                        <Link href="/volunteers">
                            <a className="custom-btn">Click here to Volunteer</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;