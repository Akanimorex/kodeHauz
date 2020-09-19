
import React,{useState,useEffect} from 'react';
import axios from 'axios';




const SingleBlog =({match})=>{
   console.log(match)
    const [article, setArticle] = useState({});
    useEffect(()=>{
        const apiPath =`https://cors-anywhere.herokuapp.com/https://kh-blog-app.herokuapp.com/api/v1/articles/${match.params.id}`;
        axios.get(apiPath,{
            headers:{
                authorization: `Bearer token`,
                // 'Access-Control-Allow-Origin': "*"
            }
        })
        .then((resp)=>{
           console.log(resp.data);
           setArticle(resp.data);
        })
    },[])

    return (
        <div className="container">
            <h1 className="text-center">{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}


export default SingleBlog;