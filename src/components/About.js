import './_About.css'

const About = ({content}) => {
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

const AboutList = ({content}) => {
    return (
        <div className='about-list'>
            {content.map((item, index) => {
                return (
                    <AboutItem item={item} key={index} />
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

const AboutItem = ({item}) => {
    return (
        <div className="about-item">
            <div className="about-item-input">{item.input}</div>
            <div 
                className="about-item-return"
                dangerouslySetInnerHTML={{__html: item.return}}
            />
        </div>
    )
}

export default About