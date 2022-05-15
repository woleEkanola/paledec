import React from 'react'
import Link from 'next/link'

const  BlogListItem= (props)=>{
    console.log(props.post)
    const d = function(x){
        var dd = String(x.getDate()).padStart(2, '0');
var mm = String(x.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = x.getFullYear();

return mm + '/' + dd + '/' + yyyy;
    }
    return(
        <div className="col-lg-4 col-md-6">
        <div className="single-blog-item">
            <div className="blog-image">
                <Link href="#">
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
                <span className="date">
                {d(new Date(props.post.frontmatter.date))}
                </span>

                <h3>
                    <Link href="#">
                        <a>
                           {props.post.frontmatter.name}
                        </a>
                    </Link>
                </h3>

                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                
                <Link href="/blog-details">
                    <a className="read-more-btn">
                        Read More 
                        <i className="icofont-thin-double-right"></i>
                    </a>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default BlogListItem