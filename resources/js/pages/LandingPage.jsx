import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import HomeSection from '../sections/HomeSection';
import OverviewSection from '../sections/OverviewSection';
import AboutSection from '../sections/AboutSection';
import EducationSection from '../sections/EducationSection';
import SkillSection from '../sections/SkillSection';
import ProjectSection from '../sections/ProjectSection';
import HobbySection from '../sections/HobbySection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main>
                <HomeSection />
                <OverviewSection />
                <AboutSection />
                <EducationSection />
                <SkillSection />
                <ProjectSection />
                <HobbySection />
                <FaqSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}