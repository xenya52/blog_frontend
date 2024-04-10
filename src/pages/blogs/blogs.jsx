import './blogs.css';
import { Link } from 'wouter';
import blogsContent from '../../assets/blogs-content.json';
import dumby from '../../assets/pictures/testBackground.png'

import Slider from "react-slick";

function Blogs() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div>
            <h1 className='topic-h1-headline'>Blogs</h1>
            <div className='content-container'>
                <Slider {...settings}>
                    {blogsContent.blogs.map((blog, index) => {
                        return <div key={index} className='blog-card'>
                            <img src={dumby} alt='blog-img'  className='img-default'/>
                            <h1>{blog.title}</h1>
                            <p>
                                {blog.introduction}
                                <br />
                                <Link to={'/'+index} slug={blogsContent.blogs[index]}> Read more...</Link>
                            </p>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Blogs;