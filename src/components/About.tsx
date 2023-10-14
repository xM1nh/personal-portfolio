import './_About.css'

interface AboutItem {
    inputVal: string,
    returnVal: string
}

interface AboutList {
    content: AboutItem[]
}

const About = ({content}: AboutList) => {
    return (
        <div className="about-container">
            <div className="terminal">
                <div className="terminal-header">
                    <div className="header-button red"/>
                    <div className="header-button yellow"/>
                    <div className="header-button green"/>
                </div>
                <div className="terminal-window">
                    <AboutList content={content}/>
                </div>
            </div>
        </div>
    )
}

const AboutList = ({content}: AboutList) => {
    return (
        <div className='about-list'>
            {content.map((e, index) => {
                return (
                    <AboutItem inputVal={e.inputVal} returnVal={e.returnVal} key={`about${index}`} />
                )
            })}
            <div className="about-item">
                <div className="about-item-input">
                    <span>&nbsp;</span>
                </div>
            </div>
        </div>
    )
}

const AboutItem = ({inputVal, returnVal}: AboutItem) => {
    return (
        <div className="about-item">
            <div className="about-item-input">{inputVal}</div>
            <div 
                className="about-item-return"
                dangerouslySetInnerHTML={{__html: returnVal}}
            />
        </div>
    )
}

export default About