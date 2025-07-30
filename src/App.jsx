import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from './HeroModels/NavBar.jsx'
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
    return (
     <>
         <NavBar />
     <Hero />
         <ShowcaseSection />
         <FeatureCards />
         <ExperienceSection />
         <TechStack />
         <Contacts />
         <Footer />
     </>
    )
}

export default App