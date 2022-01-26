
import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";;
import Menu from '../../components/Menu';
import Stats from '../../components/Stats';

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
            
            {/* <Members /> */}
            
            <Footer />
        </div>

    )
}

export default Notes;