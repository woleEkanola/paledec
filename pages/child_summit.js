import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import { react as ChildSummitContent } from '../content/child_summit.md';


const ChildSummit = () => {


    return (
              <>
                <NavbarTwo />
        <section className="about-area ptb-100 space-above space-by-left">
             <div className="contnt">
                              <h2>About Child Summit and Awards</h2>

                                       <ChildSummitContent />

                                         </div>

                         

        </section>
        <Footer />

        </>
    )
}

export default ChildSummit;