import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import Spacer from "../../components/Spacer";
import Card from "../../components/Card";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";


const Members = () => {
    const [memberslist, setMembersList] = useState([]);

    try {
        Axios.get("http://localhost:3030/corpers")
        .then((Response) => {
            setMembersList(Response.data);
        });
    } catch (e) {
        console.log(e);
    }

    const tableView = () => {
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
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
                <div>
                    <span>Total: 170</span>
                    <button>Card view</button>
                    <button onClick={tableView}>Table View</button>
                </div>
            </div>
            <div>
            {memberslist.map((val,key) => {
                    return <Card 
                        name={val.name} 
                        stateCode={val.state_code} 
                        batch={}
                        role={'Member'}
                        lga={val.lga}
                        ppa={val.ppa}
                        contact={val.phone}
                        status = {"Active"} 
                    />
                })}
            </div>
            <div>
            <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                <thead>
                        <tr class="h-8">
                            <th scope="col" class="text-left w-auto">No.</th>
                            <th scope="col" class="text-left hidden md:table-cell">Name</th>
                            <th scope="col" class="text-center  hidden md:table-cell"> Batch</th>
                            <th scope="col" class="text-left">Statecode</th>
                        </tr>
                </thead>
            </table>
            </div>
            
            
            <Spacer />

        </div>
        </>
        
    )
}

export default Members;