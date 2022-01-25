import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import Spacer from "../../components/Spacer";
import Card from "../../components/Card";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import { Passport } from "passport/lib";


const Members = () => {

    const [memberslist, setMembersList] = useState([]);
    const [displayCards, setDisplayCards] = useState(false);

    // try {
    //     Axios.get("http://localhost:3030/corpers")
    //     .then((Response) => {
    //         setMembersList(Response.data);
    //     });
    // } catch (e) {
    //     console.log(e);
    // }

    const showTable = () => {
        toggleCardDisplay();
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }
    const toggleCardDisplay = () => {
        setDisplayCards(!displayCards);
               
    }
    const  showCards = async () => {
            try {
                await Axios.get("http://localhost:3030/corpers")
                .then((Response) => {
                    setMembersList(Response.data);
                });
            } catch (e) {
                console.log(e);
            }
        
    }
    // const showBlank = () => {
    //     console.log('Blank display');
    // }

    

    return(
        <>
            <Navbar />
            <div className="w-full md:w-5/6 md:mx-auto">
                <div className="container text-gray-800">
                    
                    <SpacerSm />
               
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row h-full items-center">
                            <Link to={"/dashboard/secretarygeneral"}>
                                <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500"><i className="fas fa-angle-left"></i></span>
                            </Link> 
                            <h1 className="font-semibold text-3xl ml-5 ">List of ICT Members</h1>

                        </div> 
                        <div className="flex flex-row items-center">
                            <button className="h-12  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center" onClick={showCards}>Card view</button>
                            <button className=" h-12  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center" onClick={showTable}>Table View</button>
                        </div>
                        
                    </div>
                </div>
                <div className="">
                {memberslist.map((val,key) => {
                        return <Card 
                            imgSrc={val.profile_pic}
                            altText={val.name}
                            name={val.name} 
                            stateCode={val.state_code} 
                            batch={'18A'}
                            role={'Member'}
                            lga={val.lga}
                            ppa={val.ppa}
                            contact={val.phone}
                             
                        />
                    })}
                </div>
                <div className="hidden">
                    {memberslist.map((val,key) => {
                            return <Table 
                                name=
                                statecode=
                                batch=
                                role=
                                lga=
                                Passport={}
                            /> <tr> 
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
                </div>
                
                
                <Spacer />

            </div>
        </>
    )
                
}

export default Members;