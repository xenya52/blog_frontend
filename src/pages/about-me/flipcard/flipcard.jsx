import { useState } from 'react'
import './flipcard.css'

function Flipcard(props) {
    const {id, img, prename, age, height, pronounce, skills, hobbys} = props
    
    const [isFlipped, setIsFlipped] = useState(false)
    const toggleFlip = () => setIsFlipped(!isFlipped)

    return (
        <div 
            className={`flip-card-container ${isFlipped ? "flipped" : ""}`}
            onClick={toggleFlip}>
            <div className='flip-card'>
                {!isFlipped && (
                    <div className='front-flip-card'>
                        <img className='img-default' src={img} alt="Profile"/>
                    </div>
                )}
                {isFlipped && (
                    <div className='back-flip-card'>
                        <ul>
                            <li>Prename: {prename}</li>
                            <li>Age: {age}</li>
                            <li>Height: {height}cm</li>
                            <li>Pronouns: {pronounce}</li>
                            <li>Skills: 
                                <ul>
                                    {skills.map((skill, index) => <li key={index}>{skill}</li>)}
                                </ul>
                            </li>
                            <li>Hobbys: 
                                <ul>
                                    {hobbys.map((hobby, index) => <li key={index}>{hobby}</li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Flipcard;