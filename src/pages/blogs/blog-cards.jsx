import blogsContent from '../../assets/blogs-content.json';
import dumby from '../../assets/pictures/testBackground.png'

const BlogCards = () => {
    return(
        blogsContent.blogs.map((blog, index) => {
            <div key={index} className='blog-card'>
                <img src={dumby} alt='blog-img' />
                <h1>{blog.title}</h1>
                <p>{blog.introduction}</p>
            </div>
        })
    )
}

export default BlogCards