import { ToastContainer } from "react-toastify";
import Sliders from "../Banner/Banner";
import UserSection from "../Tabs/Tabs";
import "react-toastify/dist/ReactToastify.css";



const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <UserSection></UserSection>
        </div>
    );
};

export default Home;