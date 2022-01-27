import {Link}  from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const New = () => {
    let today = new Date();
    let date = new Date(Date.parse(today));
    let todayDate = date.toLocaleString();

    const [details, setDetails] = useState({
        startTime: '',
        endTime: '',
        venue: '',
        topic: '',
        minutes: '',
        type: '',
      });
    
      const getDetails = e => {
        setDetails({
          ...details,
          [e.target.name]: e.target.value
        });
      }

      const createNew = async () => {
        const formData = new FormData();
        formData.append('startTime', details.startTime);
        formData.append('endTime', details.endTime);
        formData.append('venue', details.venue);
        formData.append('topic', details.topic);
        formData.append('minutes', details.minutes);
        formData.append('type', details.type);
        try {
          await Axios.post("http://localhost:3030/createNew", 
          formData, {
            headers: {"Content-Type": "multipart/form-data"}
          }).then(() => {
            console.log("New Minutes Saved.")
          })
        } catch (e) {
          console.log(e);
        }
      }

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
            </div>
            <Spacer /> 
            <div className="m-auto md:w-4/6 w-full">
                <form className="text-sm text-gray-700">
                <div className="m-auto  w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center text-sm">
                        {/* <div class="no-underline rounded py-2 px-3 bg-green-100 cursor-pointer hover:bg-green-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">M</span><span class="hidden md:inline">Meeting</span></div> */}
                        <div className="flex flex-row items-center">
                            <input
                                type={"radio"}
                                id="meeting"
                                name="meeting" 
                                value={"meeting"}
                                className="border-1 rounded py-2 px-3 focus:outline-none"
                            /> 
                            <label className="ml-2" for={"meeting"}>Meeting </label>
                        </div>
                        <div className="flex flex-row items-center">
                            <input
                                type={"radio"}
                                id="event"
                                name="event" 
                                value={"event"}
                                className="border-1 bg-green-500 rounded py-2 px-3 focus:outline-none"
                            /> 
                            <label className="ml-2" for={"event"}>Event</label>
                        </div>
                        
                        {/* <div class="ml-2 no-underline rounded py-2 px-3 bg-gray-100 cursor-pointer hover:bg-yellow-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">E</span><span class="hidden md:inline">Event</span></div> */}
                    </div>
                    <div>
                            <label className="mr-2" for={"date"}>Date: </label>
                            <input
                            type={"date"}
                            id="date"
                            name="date" 
                            className="border-1 rounded py-2 px-3 focus:outline-none"
                            />  
                        </div>
                     
                </div>
                    <div className="flex flex-row items-center justify-between ">
                        <div>
                            <label className="mr-2" for={"startTime"}>Start: </label>
                            <input 
                            type="time"
                            name="startTime"
                            id="startTime"
                            placeholder="Start Time" 
                            className="border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none" />
                        </div>
                        <div>
                            <label className="mr-2" for={"startTime"}>End: </label>
                            <input 
                            type="time"
                            name="endTime"
                            id="endTime"
                            placeholder="End Time" 
                            className={`border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none`} />
                        </div>
                        
                        
                        </div>
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

                    <input
                    type={'button'} 
                    value={'Save'}
                    className="border-1 text-gray-400 text-center rounded w-full py-2 px-3 my-2 focus:outline-none" />

                </form>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default New;