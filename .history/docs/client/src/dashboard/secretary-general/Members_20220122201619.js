import { Link } from "react-router-dom"
import Spacer from "../../components/Spacer"
import SpacerSm from "../../components/SpacerSm";


const Members = () => {
    return(
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-800">
                <div className="flex flex-row h-full items-center mt-5">
                    <Link to={"/dashboard/secretarygeneral"}>
                        <span className="text-xl text-gray-300 hover:text-green-500"><i className="fas fa-angle-left"></i></span>
                    </Link>
                    
                    <h1 className="font-semibold text-3xl ml-5">List of ICT Members</h1>
                </div>
                <SpacerSm />
                <div>
                    <span>Total: 170</span>
                    <span>Active: 150</span>
                </div>
            </div>
            <div>
            {memberslist.map((val,key) => {
                    return <Card 
                        name={val.name} 
                        stateCode={val.state_code} 
                        role={'Member'}
                        lga={val.lga}
                        ppa={val.ppa}
                        contact={val.phone} 
                    />
                })}
            </div>
            
            
            <Spacer />

        </div>
    )
}

export default Members;