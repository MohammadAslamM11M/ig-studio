import HeroSection from "./Components/HeroSection/HeroSection";
import IntroSection from "./Components/IntroSection/IntroSection";
import SuccessRate from "./Components/SuccessRate/SuccessRate";
import PracticeSection from "./Components/PracticeSection/PracticeSection";
import ClientSection from "./Components/ClientSection/ClientSection";
import TeamSection from "./Components/TeamSection/TeamSection";
import FAQSection from "./Components/FAQSection/FAQSection";
import NewsLetterSection from "./Components/NewsLetterSection/NewsLetterSection";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="wrapper">
            <HeroSection />
            <IntroSection />
            <SuccessRate />
            <PracticeSection />
            <ClientSection />
            <TeamSection />
            <FAQSection />
            <NewsLetterSection />
            <Footer />
        </div>
    );
}

export default App;
