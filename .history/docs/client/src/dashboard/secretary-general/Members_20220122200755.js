import { Link } from "react-router-dom"
import Spacer from "../../components/Spacer"


const Members = () => {
    return(
        <div className="w-full md:w-5/6 md:mx-auto">
            <Link to={"/dashboard/secretarygeneral"}>
                Back
            </Link>
            <h1>List of ICT Members Total Members: 170</h1>
            <div>
                <span>Total: 170</span>
            </div>
            <Spacer />

        </div>
    )
}

export default Members;