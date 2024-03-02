import './galery.css'
import dumby from '../../assets/pictures/testBackground.png'

function Galery() {
    return(
        <div>
            <h3 className='topic-h1-headline'>Project Galery</h3>
            <div className='galery-grid-container content-container'>
                <div className='galery-grid'>
                    <img src={dumby} className='img-default' />
                </div>
                <div className='galery-grid'>
                    <h3 className='galery-grid-headline'>Lorem</h3>
                    <p className='galery-grid-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='galery-grid'>
                    <img src={dumby} className='img-default' />
                </div>
                <div className='galery-grid'>
                    <h3 className='galery-grid-headline'>Lorem</h3>
                    <p className='galery-grid-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='galery-grid'>
                    <img src={dumby} className='img-default' />
                </div>
                <div className='galery-grid'>
                    <h3 className='galery-grid-headline'>Lorem</h3>
                    <p className='galery-grid-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Galery