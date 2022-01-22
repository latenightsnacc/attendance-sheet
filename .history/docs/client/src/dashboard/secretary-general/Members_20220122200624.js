import { Link } from "react-router-dom"
import Spacer from "../../components/Spacer"


const Members = () => {
    return(
        <div class="w-full md:w-5/6 md:mx-auto">
            <Link to={"/dashboard/secretarygeneral"}>
                Back
            </Link>
            <h1>Total Members: 170</h1>
            <Spacer />

        </div>
    )
}

export default Members;