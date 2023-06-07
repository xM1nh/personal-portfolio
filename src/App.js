import Header from "./components/Header"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="index">
            <Header />
            <Introduction />
            <About content={[]}/>
            <Projects projects={[]} />
            <Contact />
            <Footer />
        </div>
    )
}

export default App