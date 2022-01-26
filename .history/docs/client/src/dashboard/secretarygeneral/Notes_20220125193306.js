
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
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
            
            {/* <Members /> */}
            
            <Footer />
        </div>

    )
}

export default Notes;