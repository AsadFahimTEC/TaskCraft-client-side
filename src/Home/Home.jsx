import Sliders from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
// import Services from "../Services/Services";
import Tabs from "../Tabs/Tabs";
import TouristStories from "../TourStory/TourStory";
// import Type from "../Type/Type";



const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Tabs></Tabs>
            <TouristStories></TouristStories>
            <Contact></Contact>
            {/* <Type></Type> */}
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;