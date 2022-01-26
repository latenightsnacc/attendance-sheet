import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
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
                <div className="flex flex-row justify-between">
                    <h2 className="ml-5 text-gray-800 text-xl">Recent</h2>
                    <button className=" h-12  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center" onClick={viewAll}>Table View</button>
                </div>
                
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