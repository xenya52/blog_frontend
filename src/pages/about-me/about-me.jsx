import './about-me.css'
import lucyPic from '../../assets/pictures/lucy.jpeg'
import FlipCard from './flipcard/flipcard.jsx'

function AboutMe() {

    const aboutMeData =
        {
            id: 1,
            img: lucyPic,
            prename: "Lucy",
            age: 20,
            height: 180,
            pronounce: "she/her",
            skills: ["rust", "react", "git"],
            hobbys: ["yoga", "programming", "shibari", "reading", "games"]
        }

    return(
        <div>
            <h1 className='topic-h1-headline'>About me</h1>
            <div className='content-container'>
                <div className='about-me-flip-container'>
                    <FlipCard key={aboutMeData.id} {...aboutMeData} />
                    {/* <img  className='img-default'src={lucyPic}></img> */}
                </div>
                    <div className='about-me-text-container'>
                        <h3>Keep things simple</h3>
                        <p>I'm not really long on this planet but I try every time to get a system into my toughts and actions. 
                            Thats hard for me because earth is complicated. 
                            And sometimse it's just easyer to keep things simple.</p>
                        <h3>Software is my passion</h3>
                    </div>
                </div>
        </div>
    )
}

export default AboutMe