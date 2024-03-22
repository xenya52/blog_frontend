import React from 'react';
import { useParams } from 'react-router-dom';
import blogsContent from './data/blogs-content.json';

const BlogPost = () => {
  let { blogId } = useParams();
  const blog = blogsContent.blogs.find((b, index) => index.toString() === blogId);

  if (!blog) {
    return <div>Blogpost nicht gefunden.</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.introduction}</p>
      {/* Weitere Blog-Details hier */}
    </div>
  );
};

export default BlogPost;