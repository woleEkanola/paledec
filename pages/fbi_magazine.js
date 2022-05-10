import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import { react as FBIContent } from '../content/fbi.md';




const FBIMagazine = () => {


    return (
        <>
        <NavbarTwo />
        <section className="about-area ptb-100 space-above">
             <div className="contnt">
                               
                                        <h2>About FBI Magazine</h2>
                                        <FBIContent />
                            </div>
                  

        </section>
        <Footer />

        </>
    )
}

export default FBIMagazine;