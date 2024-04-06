import React from 'react';
import { useParams, Link } from 'wouter';
import blogsContent from '../../assets/blogs-content.json';
import dumby from '../../assets/pictures/testBackground.png'


const BlogIndex = () => {
  let { slug } = useParams();

  const blogPost = blogsContent.blogs[slug];

  if (!blogPost) {
    return <div>Blogpost not found!</div>;
  }

  return (
    <div>
        <div className='content-container'>
          <Link to='/'><button className='blog-button'>←</button></Link>
          <div>
            <img  className='img-default'src={dumby}  />
          </div>
          <h3>{blogPost.title}</h3>
          <p>{blogPost.introduction}</p>
        </div>
    </div>
  );
};

export default BlogIndex;