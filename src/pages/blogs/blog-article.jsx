import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import blogsContent from '../../assets/blogs-content.json';


const BlogArticel = () => {
  let { slug } = useParams();

  const blogPost = blogsContent.blogs[slug];

  if (!blogPost) {
    return <div>Blogpost not found!</div>;
  }
  return (
    <div>
        <div className='content-container'>
          <div>
            {console.log(blogPost.image_debug_path)}
            <img className='img-default'src={blogPost.image_debug_path} alt='blog-img'/>
          </div>
          <h3>{blogPost.title}</h3>
          <p>{blogPost.introduction}</p>
          <Link to='/'><button className='button-default'>←</button></Link>
        </div>
    </div>
  );
};

export default BlogArticel;