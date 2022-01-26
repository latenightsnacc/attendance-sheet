import Menu from "../../components/Menu";
import Stats from '../../components/Stats';
import Banner from "../../components/Banner";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Summary from "../../components/Summary";
import Footer from "../../components/Footer";;

const Notes = () => {
    
    return(
        <div>
            <Navbar />
            <Banner />
            <Spacer />
            
            <div className="w-full md:w-5/6 md:mx-auto">
                <Menu />
                <SpacerSm />
                <Stats  />
                <Spacer />

            </div>
            
            
            
            <Footer />
        </div>

    )
}

export default Notes;