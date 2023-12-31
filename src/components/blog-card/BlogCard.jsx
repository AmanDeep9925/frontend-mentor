import React from 'react'
import './BlogCard.css'
import blogImage from "../../assets/images/illustration-article.png"
import blogAvatar from "../../assets/images/image-avatar.webp";

const BlogCard = (props) => {
    const blog = props.blog;
    console.log(blog)
  return (
    <div className="blog-card">
        <header>
            <img src={blogImage} alt="HeaderImage" />
        </header>
        <article>
            <span className="tag">
                {blog.tag}
            </span>
            <p className="publish-date">
                Published {blog.date}
            </p>
        </article>
        <section>
        <h1>
            {blog.title}
        </h1>
        <p>
            {blog.message}
        </p>
        </section>
        <footer>
            <img src={blogAvatar} alt="Avatar" />
            <span>{blog.publisher.name}</span>
        </footer>
    </div>
  )
}

export default BlogCard