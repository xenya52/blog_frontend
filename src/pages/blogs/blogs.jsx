import './blogs.css'
import dumby from '../../assets/pictures/testBackground.png'

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
                    <div className='blog-grid'>
                        <h3 className='blog-headline'>
                            Lorem ipsum dolor
                        </h3>
                        {/* grid01 */}
                    </div>
                    <div className='blog-grid'>
                        <h3 className='blog-headline'>
                            Lorem ipsum dolor
                        </h3>
                        {/* grid02 */}
                    </div>
                    <div className='blog-grid'>
                        <h3 className='blog-headline'>
                            Lorem ipsum dolor
                        </h3>
                        {/* grid03 */}
                    </div>
                    <div className='blog-grid'>
                        <h3 className='blog-headline'>
                            Lorem ipsum dolor
                        </h3>
                        {/* grid04 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs