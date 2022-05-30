import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
// import BlogListItem from '../components/blog/BlogListItem';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link'
import { dateFormatter } from '../utils'

const  BlogListItem= (props)=>{
  console.log(props.post.frontmatter)
  
      return(
    
          <div className="single-blog-item">
              <div className="blog-image">
                  <Link href={`/team/${props.post.slug}`}>
                      <a>
                          <img src={'/' + props.post.frontmatter.thumbnail} alt="image" />
                      </a>
                  </Link>
  
                  {/* <div className="post-tag">
                      <Link href="/blog">
                          <a>IT Agency</a>
                      </Link>
                  </div> */}
              </div>
  
              <div className="blog-post-content">
                
  
                  <h3>
                      <Link href={`/team/${props.post.slug}`}>
                          <a>
                             {props.post.frontmatter.name}
                          </a>
                      </Link>
                  </h3>
  
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                  
              
              </div>
          </div>
 
      )
  }

export default function Team  (obj) {

   
  
   const posts = obj.posts
       

return(
  <>
  <NavbarTwo />

  <PageBanner 
      pageTitle="Our Team Members " 
      BGImage="bg-four"
  />  


<section className="about-area ptb-100 jg">
      <div className="contnt  blogL">

        {
         posts.length >0 && posts.map(post => <BlogListItem post={post} key={post.slug}/>                          )
        }

{
  posts.length==0 && <p>No Blog post at the moment</p>
}
</div>
</section>
  
  <Footer/>
</>
)

        
     


        }


        export async function getStaticProps() {
            // Get files from the posts dir
            const files = fs.readdirSync(path.join('content/team'))
          
            // Get slug and frontmatter from posts
            const posts = files.map((filename) => {
              // Create slug
              const slug = filename.replace('.md', '')
          
              // Get frontmatter
              const markdownWithMeta = fs.readFileSync(
                path.join('content/team', filename),
                'utf-8'
              )
          
              const { data: frontmatter } = matter(markdownWithMeta)
        
          // console.log( 'XXXXXXXXX',frontmatter.date)
              return {
                slug,
                frontmatter,
              }
            })
          
            return {
              props: {
                posts: posts,
              },
            }
    
        }

