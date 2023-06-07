import './styles/App.css'

import aboutContent from './contents/aboutContent'

import Header from "./components/Header"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className='idek'>
            <div className="main-container">
                <Header />
                <Introduction />
                <About content={aboutContent}/>
                <Projects projects={[]} />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App