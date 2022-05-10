import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const ChildSummit = () => {


    return (
        <section>
             <div className="col-lg-12 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About Child Summit and Awards</h2>

                                        <p>The Child Summit and Award is an annual conference entirely dedicated to identifying the greatest barriers to Child development in Africa, formulating sustainable solutions to these challenges, and spot and giving proper recognition through the conferment of awards of excellence to African Children within the ages of 5-17 years old who have displayed outstanding bravery and inspire other children with their measurable achievements in different fields.</p>
<p>Different editions of the Child Summit are being held in Nigeria, Ghana, Tanzania, Kenya, South Africa and Morocco.</p>
                                        
                                         </div>

                                    
                                </div>
                            </div>
                  

        </section>
    )
}

export default ChildSummit;