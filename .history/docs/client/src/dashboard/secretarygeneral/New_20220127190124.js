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
                    <div className="flex flex-row items-center justify-between ">
                        <input 
                        type="text"
                        name="startTime"
                        id="startTime"
                        placeholder="Start Time" 
                        className="border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none" />
                        <input 
                        type="text"
                        name="endTime"
                        id="startTime"
                        placeholder="End Time" 
                        className={`border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none`} />
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