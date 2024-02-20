import React from 'react'
import Article from './Article.js'

function ArticleList({ posts }) {
    let articleArr = posts.map(post => {
        return <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
    })
    return (
        <main>
            <>{articleArr}</>
        </main>
    )
}

export default ArticleList