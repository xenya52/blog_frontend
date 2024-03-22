import './blogs.css'
import dumby from '../../assets/pictures/testBackground.png'
import blogData from '../../assets/content.json'

function Blogs() {
    return(
        <div>
            <h1 className='topic-h1-headline'>Blogs</h1>
            <div className='content-container'>
                <div>
                    <img  className='img-default'src={dumby}></img>
                </div>
                <div>
                    <h3 className='blog-headline'>
                        Lorem ipsum dolor
                    </h3>
                </div>
                <div className='blog-grid-container'>
                {blogData.blogs.map((blog, index) => (
                        <div key={index}>
                        <Link to={`/blogs/${index}`}>{blog.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs

{/* <div>
      {blogData.blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.introduction}</p>
          <ul>
            {blog.main_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}

{/* <div className='blog-grid-container'>
                    <div className='blog-grid'>
                        <button className='blog-button'>
                            Lorem ipsum dolor
                        </button>
                    </div>
                    <div className='blog-grid'>
                        <button className='blog-button'>
                            Lorem ipsum dolor
                        </button>
                    </div>
                    <div className='blog-grid'>
                        <button className='blog-button'>
                            Lorem ipsum dolor
                        </button>
                    </div>
                    <div className='blog-grid'>
                        <button className='blog-button'>
                            Lorem ipsum dolor
                        </button>
                    </div>
                    <div className='blog-grid'>
                        <button className='blog-button'>
                            Lorem ipsum dolor
                        </button>
                    </div>
                    <div className='blog-grid'>
                        <button className='blog-button'>
                            Lorem ipsum dolor
                        </button>
                    </div>
                </div> */}