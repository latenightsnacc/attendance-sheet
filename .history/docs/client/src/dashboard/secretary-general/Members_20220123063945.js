import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import Spacer from "../../components/Spacer";
import Card from "../../components/Card";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";


const Members = () => {

    const [memberslist, setMembersList] = useState([]);

    const showTable = () => {
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }
    const showCards = () => {
        
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }
    const showBlank = () => {
        console.log('Blank display');
    }

    const [displayCards, setDisplayCards] = useState(false);

    const toggleCardDisplay = () => {

       const display = setDisplayCards(!displayCards) ? showCards() :null;

        if(displayCards) {
            showCards();
        } else {
            showBlank();
        }
        console.log(displayCards);       
    }
    

    return(
        <>
            <Navbar />
            <div className="w-full md:w-5/6 md:mx-auto">
                <div className="container text-gray-800">
                    <div className="flex flex-row h-full items-center mt-5">
                        <Link to={"/dashboard/secretarygeneral"}>
                            <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500"><i className="fas fa-angle-left"></i></span>
                        </Link>
                        
                        <h1 className="font-semibold text-3xl ml-5">List of ICT Members</h1>
                    </div>
                    <SpacerSm />
               
                    <div className="flex flex-row justify-between">
                        <span className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">Total: 170</span>
                        <div className="flex flex-row">
                            <button className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center" onClick={toggleCardDisplay}>Card view</button>
                            <button className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center" onClick={toggleCardDisplay}>Table View</button>
                        </div>
                        
                    </div>
                </div>
                <div>
                {memberslist.map((val,key) => {
                        return <Card 
                            name={val.name} 
                            stateCode={val.state_code} 
                            batch={'18A'}
                            role={'Member'}
                            lga={val.lga}
                            ppa={val.ppa}
                            contact={val.phone}
                            status = {"Active"} 
                        />
                    })}
                </div>
                <div className="hidden">
                <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                    <thead>
                            <tr class="h-8">
                                <th scope="col" class="text-left w-auto">No.</th>
                                <th scope="col" class="text-left hidden md:table-cell">Name</th>
                                <th scope="col" class="text-left">Statecode</th>
                                <th scope="col" class="text-left">Batch</th>
                                <th scope="col" class="text-left  hidden md:table-cell">Role</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> L.G.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> P.P.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Contact</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Status</th>
                            </tr>
                    </thead>
                    <tbody>
                    {memberslist.map((val,key) => {
                        return <tr> 
                            <td> 1</td>
                            <td>{val.name}</td>
                            <td>{val.state_code}</td>
                            <td>{'18A'}</td>
                            <td>{'Member'}</td>
                            <td>{val.lga}</td>
                            <td>{val.ppa}</td>
                            <td>{val.phone}</td>
                            <td>{"Active"} </td>
                        </tr>
                    })}
                    </tbody>
                </table>
                </div>
                
                
                <Spacer />

            </div>
        </>
    )
                
}

export default Members;