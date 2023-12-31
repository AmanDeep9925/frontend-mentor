import React from 'react'
import BlogCard from './BlogCard'
import './BlogContainer.css';

const blog = {
    image:"../../assets/images/illustration-article.png",
    tag:"Learning",
    date:"21 Dec 2023",
    title:"HTML & CSS foundations",
    message:"These lagugages are the backbone of every website, defining structure, content and presentation",
    publisher: {
        name:"Greg Hooper",
        avatar: "../../assets/images/image-avatar.webp"
    }
}

const BlogContainer = () => {
  return (
    <div className='blog-container'>
        <BlogCard blog={blog}/>
    </div>
  )
}

export default BlogContainer