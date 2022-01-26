import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const New = () => {
    return(
        <>
        <Navbar />
        <SpacerSm />
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-800">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row h-full items-center">
                        <Link to={"/dashboard/secretarygeneral/notes"}>
                            <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                                <i className="fas fa-angle-left"></i></span>
                        </Link> 
                        <h1 className="font-semibold text-3xl ml-5">New</h1>
                    </div>
                    <div>
                        <a  href="record-attendance.html" class="no-underline rounded py-2 px-3 bg-green-100 cursor-pointer hover:bg-green-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">M</span><span class="hidden md:inline">Meeting</span></a>
                        <a href="record-attendance-event.html" class="no-underline rounded py-2 px-3 bg-gray-100 cursor-pointer hover:bg-yellow-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">E</span><span class="hidden md:inline">Event</span></a>
                    </div>    
                </div>
            </div>
            <Spacer /> 
        </div>
        <Footer />
    </>
    )
}

export default New;