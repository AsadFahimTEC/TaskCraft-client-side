import Sliders from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";




const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Services></Services>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;