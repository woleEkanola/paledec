import React from 'react';
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import { dateFormatter } from '../../utils'



export default function TeamPage(props){
    console.log(props)
    return(
        <>
        <NavbarTwo />
        
        <PageBanner 
            pageTitle={props.frontmatter.name}
            BGImage="bg-four"
        />  
<section className="about-area ptb-100 space-by-left">

<div className='contnt'>

<h1>
   {props.frontmatter.name}
</h1>
<p>     { dateFormatter(new Date(props.frontmatter.date))}</p>

<img src={'/' + props.frontmatter.thumbnail} alt="image" />
                 
<ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]}  />

       
</div>
</section>
     


        <Footer />
    </>
    )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content/team'))
  
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join('content/team', slug + '.md'),
      'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
  
    return {
      props: {
        frontmatter,
        slug,
        content,
      },
    }
  }