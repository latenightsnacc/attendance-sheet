import {Link}  from "react-router-dom";
import { useState } from "";
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
        formData.append('name', corper.name);
        formData.append('email', corper.email);
        formData.append('phone', corper.phone);
        formData.append('state', corper.state);
        formData.append('statecode', corper.statecode);
        formData.append('batch', corper.batch);
        formData.append('cds', corper.cds);
        formData.append('lga', corper.lga);
        formData.append('ppa', corper.ppa);
        formData.append('profilePic', profilePic.file);
        formData.append('profilePicName', profilePic.fileName);
        try {
          await Axios.post("http://localhost:3030/create", 
          formData, {
            headers: {"Content-Type": "multipart/form-data"}
          }).then(() => {
            console.log("Corper's E-Attendance Profile Created.")
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
                <div className="m-auto md:w-4/6 w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center text-sm">
                        <div class="no-underline rounded py-2 px-3 bg-green-100 cursor-pointer hover:bg-green-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">M</span><span class="hidden md:inline">Meeting</span></div>
                        <div class="ml-2 no-underline rounded py-2 px-3 bg-gray-100 cursor-pointer hover:bg-yellow-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">E</span><span class="hidden md:inline">Event</span></div>
                    </div>
                    <div className="">
                        <span className="text-gray-500 text-sm">{todayDate}</span>
                    </div>    
                </div>                
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