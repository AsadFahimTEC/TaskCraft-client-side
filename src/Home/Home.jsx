import Sliders from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";
import Tabs from "../Tabs/Tabs";




const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Tabs></Tabs>
            <Services></Services>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;