import { Link } from "react-router-dom"
import Spacer from "../../components/Spacer"


const Members = () => {
    return(
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-80">
                <div className="flex flex-row">
                    <Link to={"/dashboard/secretarygeneral"}>
                        Back
                    </Link>
                    <h1 className="">List of ICT Members</h1>
                </div>
                <div>
                <span>Total: 170</span>
                <span>Active: 150</span>
            </div>
            </div>
            
            
            <Spacer />

        </div>
    )
}

export default Members;