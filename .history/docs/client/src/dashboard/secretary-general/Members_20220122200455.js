import { Link } from "react-router-dom"
import Spacer from "../../components/Spacer"


const Members = () => {
    return(
        <div>
            <Link to={"../../SecretaryGeneral"}>
                Back
            </Link>
            <h1>Total Members: 170</h1>
            <Spacer />

        </div>
    )
}

export default Members;