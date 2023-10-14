import "./App.css";

import aboutContent from "./contents/aboutContent";
import projectsContent from "./contents/projectsContent";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

const App = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      <Header
        handleContactClick={handleContactClick}
        handleProjectClick={handleProjectClick}
      />
      <Introduction handleProjectClick={handleProjectClick} />
      <About content={aboutContent} />
      <div className="section-title">Projects</div>
      <Projects projects={projectsContent} ref={projectRef} />
      <div className="section-title">Contact</div>
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
