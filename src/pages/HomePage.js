import NavbarApp from "../components/NavbarApp";
import IntroSection from "../components/IntroSection";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import ContactMe from "../components/ContactMe";
import MySkills from "../about/MySkills";
import banner from '../img/banner.png';
import { Container, Row, Col } from "reactstrap";
import ProjectsHomePage from "../projects/ProjectsHomePage";


const HomePage = () => {
    return (
        <>
            <NavbarApp />
            <IntroSection />
            <MySkills />
            <ProjectsHomePage />
            <MyProjects />
            <ContactMe />
        </>
    )
}

export default HomePage