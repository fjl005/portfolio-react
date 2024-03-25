import NavbarApp from "../components/NavbarApp";
import IntroSection from "../components/IntroSection";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import ContactMe from "../components/ContactMe";

const HomePage = () => {
    return (
        <>
            <NavbarApp />
            <IntroSection />
            <AboutMe />
            <MyProjects />
            <ContactMe />
        </>
    )
}

export default HomePage