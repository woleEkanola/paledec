import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogGridThree from '../components/Blog/BlogGridThree';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {

   
    render() {
        const blog = []
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Blog Posts" 
                    BGImage="bg-four"
                />  


<section className="about-area ptb-100 jg">
                    <div className="contnt">

              <p>{blog.length >0 ?  '': 'There is no Blog post at the moment... Stay tuned.'}</p>

</div>
</section>
                
                <Footer/>
            </>
        );
    }
}

export default Blog;