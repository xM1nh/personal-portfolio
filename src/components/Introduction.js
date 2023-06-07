import Typewriter from "./Typewriter";
import './_Introduction.css'

const Introduction = () => {
    return (
        <div className="introduction">
            <Typewriter className='intro-title' content="Minh Le" />
            <div className="description">
                <p>
                I am an aspiring software engineer with an entrpreneuial drive. 
                I am seeking to join a mission-driven team that is undertaking challenging, change-making problems.
                </p>
                <p>
                Check out my projects below
                </p>
            </div>
        </div>
    )
}

export default Introduction