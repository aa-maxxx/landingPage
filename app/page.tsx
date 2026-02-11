import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <AboutUs />
                <HowItWorks />
                <ContactUs />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
