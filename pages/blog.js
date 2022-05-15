import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogListItem from '../components/blog/BlogListItem';
import Footer from '../components/Layouts/Footer';

export default function Blog  (obj) {

   
  
   const posts = obj.posts
        

return(
  <>
  <NavbarTwo />

  <PageBanner 
      pageTitle="Blog Posts" 
      BGImage="bg-four"
  />  


<section className="about-area ptb-100 jg">
      <div className="contnt">

        {
         posts.length >0 && posts.map(post => <BlogListItem post={post}/>                          )
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
            const files = fs.readdirSync(path.join('content/blog'))
          
            // Get slug and frontmatter from posts
            const posts = files.map((filename) => {
              // Create slug
              const slug = filename.replace('.md', '')
          
              // Get frontmatter
              const markdownWithMeta = fs.readFileSync(
                path.join('content/blog', filename),
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

