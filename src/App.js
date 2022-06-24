import Contact from "./components/Contact/Contact";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Packages from "./components/Packages/Packages";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Destinations />
            <Packages />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}