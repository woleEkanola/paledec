import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import OurWorks from '../components/DefaultHome/OurWorks';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { attributes, react as HomeContent } from '../content/home.md';

const x = attributes



const Home =()=>{


    useEffect(() => {
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on('init', (user) => {
            if (!user) {
              window.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/'
              })
            }
          })
        }
      }, [])

    return(
    <>
      <Head>
        {/* <title>Netlify CMS && Next.js Starter</title> */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
         <NavbarTwo />
                
                <MainBanner x ={x}/> 
         
                <OurWorks  x ={x}  />
                <CtaAreaTwo />
                <Footer />



 
    </>)
}

export default Home