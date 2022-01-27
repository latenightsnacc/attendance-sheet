import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const New = () => {
    let today = new Date();
    let date = new Date(Date.parse(today));
    let todayDate = date.toLocaleString();
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
                    <div className="flex flex-row items-center text-sm">
                        <div class="no-underline rounded py-2 px-3 bg-green-100 cursor-pointer hover:bg-green-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">M</span><span class="hidden md:inline">Meeting</span></div>
                        <div class="ml-2 no-underline rounded py-2 px-3 bg-gray-100 cursor-pointer hover:bg-yellow-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">E</span><span class="hidden md:inline">Event</span></div>
                    </div>
                    <div className="mr-5">
                        <span className="text-gray-500 text-xs">{todayDate}</span>
                    </div>    
                </div>                
            </div>
            <Spacer /> 
            <div className="mx-7">
                <form>
                <div className="flex flex-row items-center justify-between text-sm text-gray-700">
                        <div>
                            <label className="mr-2">Start Time:</label>
                            <input 
                            type="text"
                            name="startTime"
                            id="startTime"
                            placeholder="Start Time" 
                            className="border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none" />
                        </div>
                        <div className="ml-2">
                            <label className="mr-2">End Time:</label>
                            <input 
                            type="text"
                            name="endTime"
                            id="startTime"
                            placeholder="Start Time" 
                            className="border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none" />
                        </div>
                    </div>
                    <div></div>
                    <label>Venue</label>
                    <input 
                    type="text"
                    name="venue"
                    id="venue"
                    placeholder="Venue" 
                    className="border-1 rounded w-full py-2 px-3 my-2 focus:outline-none" />
                    <input 
                    type="text"
                    name="topic"
                    id="topic"
                    placeholder="Topic" 
                    className="border-1 rounded w-full py-2 px-3 my-2 focus:outline-none" />
                    <textarea 
                    placeholder="Minutes..."
                    name="minutes"
                    id="minutes"
                    type="text"
                    className="border-1 rounded w-full h-96 p-3 focus:outline-none"></textarea>
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