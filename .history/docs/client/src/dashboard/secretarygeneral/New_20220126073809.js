import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const New = () => {
    let today = new Date();
    let s = "2005-07-08T11:22:33+0000";
let d = new Date(Date.parse());

// this logs for me 
// "Fri Jul 08 2005 13:22:33 GMT+0200 (Central European Summer Time)" 
// and something else for you

console.log(d.toString()) 

// this logs
// Fri, 08 Jul 2005 11:22:33 GMT
// for everyone

console.log(d.toUTCString())
    return(
        <>
        <Navbar />
        <SpacerSm />
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-800">
                <div className="flex flex-row h-full items-center">
                    <Link to={"/dashboard/secretarygeneral/notes"}>
                        <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                            <i className="fas fa-angle-left"></i></span>
                    </Link> 
                    <h1 className="font-semibold text-3xl ml-5">Create New</h1>
                </div>
                <Spacer />
                <div className="ml-5 flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <div class="no-underline rounded py-2 px-3 bg-green-100 cursor-pointer hover:bg-green-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">M</span><span class="hidden md:inline">Meeting</span></div>
                        <div class="ml-2 no-underline rounded py-2 px-3 bg-gray-100 cursor-pointer hover:bg-yellow-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">E</span><span class="hidden md:inline">Event</span></div>
                    </div>
                    <div>
                        <span className="text-gray-500 text-xs">{Date()}</span>
                    </div>    
                </div>                
            </div>
            <Spacer /> 
            <div className="mx-7">
                <form>
                    <textarea className="border-1 w-full h-96 p-3 focus:outline-none"></textarea>
                    <SpacerSm />
                    <button className="h-10 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-sm text-center  capitalize shadow-sm flex items-center">Save </button>

                </form>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default New;