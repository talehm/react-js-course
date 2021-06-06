import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams} from "react-router-dom";
const propTypes = {
    
}

function Article(props) {
    let { id } = useParams();
    const [article, setArticle]= useState(null)

    const fetchSingleArticle = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(res => res.json())
        .then(article => setArticle(article))
    }

    useEffect(()=>{
        fetchSingleArticle();
    },[])
    
    return (
           <div> {article && Object.keys(article).length > 0 ? <div>
               <h2>{article.id}.{article.title}</h2>
               {article.body}
               </div> : 
               <h1> 404 Not Found</h1>
               }
           </div>

    )
}

Article.propTypes = propTypes

export default Article
