import React, { useState } from 'react';
import './blogs.css';
import dumby from '../../assets/pictures/testBackground.png';
import blogData from '../../assets/content.json';
import { Link } from 'wouter';

function Blogs() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstItem = currentIndex === 0;
        const newIndex = isFirstItem ? blogData.blogs.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastItem = currentIndex === blogData.blogs.length - 1;
        const newIndex = isLastItem ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div>
            <h1 className='topic-h1-headline'>Blogs</h1>
            <div className='content-container'>
                <div>
                    <img className='img-default' src={dumby} alt="Background"></img>
                </div>
                <div className='carousel-container'>
                    <div className='blog-container' key={currentIndex}>
                        <Link to={`/blogs/${currentIndex}`} slug={blogData.blogs[currentIndex]}>
                            <button className="blog-button">{blogData.blogs[currentIndex].title}</button>
                        </Link>
                    </div>
                    <div className='blog-nav-container'>
                        <button className="carousel-button blog-button" onClick={goToPrevious}>←</button>
                        <button className="carousel-button blog-button" onClick={goToNext}>→ </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;