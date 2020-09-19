import React from 'react';
import '../styles/blog.css';
import { Redirect, Link } from 'react-router-dom';
import SingleBlog from './SingleBlog';


const BlogCard =(props)=>{

   

    const {articleInfo} = props;
    return(           
            <div className="blog-card mt-4">
                <h2>{articleInfo.title}</h2>
                <p>{articleInfo.content.substring(0,300)} <Link to={`/blogpost/${articleInfo.id}`} style={{color:'grey',cursor:'pointer'}}> Read More...</Link></p>
                  <button className="btn btn-primary m-2">Edit</button>
                  <button className="btn btn-primary m-2">Delete</button>
            </div>
        
    )
}

export default BlogCard;