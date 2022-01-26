import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import SpacerSm from "../../components/SpacerSm";
import Summary from "../../components/Summary";
import Footer from "../../components/Footer";;

const Notes = () => {
    
    return(
        <div>
            <Navbar />
            <Banner />
            <Menu />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <h2 className="ml-5 text-gray-800 text-xl">Recent</h2>
                <Summary />
                <Summary />
                <Summary />
                <Spacer />
            </div>
            
            
            
            <Footer />
        </div>

    )
}

export default Notes;