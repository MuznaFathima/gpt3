import './article.css'
import React from 'react'

function Article({imgUrl,date,title}) {
  return (
    <div className='gpt3__blog-container_article'>
        <div className="gpt3__blog-container_aticle-image">
            <img src={imgUrl} alt="blog" />
        </div>
        <div className="gpt3__blog-container_article-content">
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read Full Article</p>
            </div>
        </div>
    </div>
  )
}

export default Article
