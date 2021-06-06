import React from 'react'
import {useEffect, useState} from 'react'
import Paper from "./Paper"

import PropTypes from 'prop-types'
import ArticleForm from "./ArticleForm"

const propTypes = {
    
}

function Blog(props) {
    const [isFormActive, activateForm] = useState(false);
    const [articles, setArticles] = useState([]);

    const showForm=(active)=>{
        activateForm(active);
    } 
    const submitForm=(data)=>{
     setArticles([...articles, data])
    } 
    useEffect(() => {
        // It will be called before unmounting.
        fetchArticles();
        //console.log('Component is updated');
        
      }, []);
    const fetchArticles = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(articles => setArticles(articles))
    }
    return (
        <div>
          <h1>  Our Blog posts </h1>
          <h1 onClick={()=> showForm(!isFormActive)}>Add Article</h1>
            {isFormActive ? <ArticleForm  submitForm={(data)=>submitForm(data)} /> : null}
        <Paper  myarticles={articles}  style={{width:"100%"}} />

        </div>
    )
}

Blog.propTypes = propTypes

export default Blog
