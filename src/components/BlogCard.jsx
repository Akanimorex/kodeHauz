import React from 'react';
import '../styles/blog.css';


const BlogCard =(props)=>{

    const viewPost = ()=>{
        
    }

    const {articleInfo} = props;
    return(
             
            <div className="blog-card mt-4">
                <h2>{articleInfo.title}</h2>
                <p>{articleInfo.content.substring(0,300)} <span style={{color:'grey',cursor:'pointer'}} onClick={viewPost}> Read More...</span></p>
                  <button className="btn btn-primary m-2">Edit</button>
                  <button className="btn btn-primary m-2">Delete</button>
            </div>
        
    )
}

export default BlogCard;