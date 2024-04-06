import './blogs.css';
import { Link } from 'wouter';
import BlogCards from './blog-cards';

function Blogs() {
    return (
        <div>
            <h1 className='topic-h1-headline'>Blogs</h1>
            <div className='content-container'>
                <BlogCards />
                {/* <blogCards className='carousel-container'>
                    <div className='blog-container' key={currentIndex}>
                        {blogCards}
                        <Link to={`/blogs/${currentIndex}`} slug={blogData.blogs[currentIndex]}>
                            <button className="blog-button">{blogData.blogs[currentIndex].title}</button>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Blogs;