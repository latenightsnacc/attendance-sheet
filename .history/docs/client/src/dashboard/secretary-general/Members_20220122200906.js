import { Link } from "react-router-dom"
import Spacer from "../../components/Spacer"


const Members = () => {
    return(
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container"></div>
            <Link to={"/dashboard/secretarygeneral"}>
                Back
            </Link>
            <h1>List of ICT Members</h1>
            <div>
                <span>Total: 170</span>
                <span>Active: 150</span>
            </div>
            <Spacer />

        </div>
    )
}

export default Members;