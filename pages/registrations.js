import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
// import BlogListItem from '../components/blog/BlogListItem';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link'

const  BlogListItem= (props)=>{
  
  
      return(
          <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
              <div className="blog-image">
                  <Link href={props.post.frontmatter.link} target='blank'>
                      <a>
                          <img src={'/' + props.post.frontmatter.banner} alt="image" />
                      </a>
                  </Link>
  
                  {/* <div className="post-tag">
                      <Link href="/blog">
                          <a>IT Agency</a>
                      </Link>
                  </div> */}
              </div>
  
              <div className="blog-post-content">
                  <span className="date">
                  { props.post.frontmatter.date}
                  </span>
  
                  <h3>
                      <Link href={props.post.frontmatter.link} target='blank'>
                          <a>
                             {props.post.frontmatter.name}
                          </a>
                      </Link>
                  </h3>
  
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                  <Link href={props.post.frontmatter.link}>
                      <a className="read-more-btn">
                          Register Now!!! 
                          <i className="icofont-thin-double-right"></i>
                      </a>
                  </Link>
              
              </div>
          </div>
      </div>
      )
  }

export default function Registrations  (obj) {

   
  
   const posts = obj.posts
        

return(
  <>
  <NavbarTwo />

  <PageBanner 
      pageTitle="Events and Registrations  " 
      BGImage="bg-four"
  />  


<section className="about-area ptb-100 jg">
      <div className="contnt">

        {
         posts.length >0 && posts.map(post => <BlogListItem post={post} key={post.slug}/>                          )
        }

{
  posts.length==0 && <p>No Events/Registrations at the moment</p>
}
</div>
</section>
  
  <Footer/>
</>
)

        
     


        }


        export async function getStaticProps() {
            // Get files from the posts dir
            const files = fs.readdirSync(path.join('content/registrations'))
          
            // Get slug and frontmatter from posts
            const posts = files.map((filename) => {
              // Create slug
              const slug = filename.replace('.md', '')
          
              // Get frontmatter
              const markdownWithMeta = fs.readFileSync(
                path.join('content/registrations', filename),
                'utf-8'
              )
          
              const { data: frontmatter } = matter(markdownWithMeta)
          
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

