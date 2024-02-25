
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './galery.css'

function Galery() {
    return(
        <div>
            <Header />
            <h1 className='galery-topic-headline'>Project Galery</h1>
            <div className='galery-grid-container'>
                <div className='galery-grid'>
                    <img src='' className='galery-grid-img' />
                </div>
                <div className='galery-grid'>
                    <h1 className='galery-grid-headline'>Lorem</h1>
                    <p className='galery-grid-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='galery-grid'>
                    <img src='' className='galery-grid-img' />
                </div>
                <div className='galery-grid'>
                    <h1 className='galery-grid-headline'>Lorem</h1>
                    <p className='galery-grid-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='galery-grid'>
                    <img src='' className='galery-grid-img' />
                </div>
                <div className='galery-grid'>
                    <h1 className='galery-grid-headline'>Lorem</h1>
                    <p className='galery-grid-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Galery