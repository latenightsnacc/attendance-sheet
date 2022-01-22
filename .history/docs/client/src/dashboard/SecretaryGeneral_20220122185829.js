import {useState} from 'react';
import Axios from 'axios'

const SecretaryGeneral = () => {
    const [memberslist, setMembersList] = useState([]);

    const viewAll = () => {
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
        <div>
            <h1>Hello Secretary General</h1>
            <div>
                <button>New Minutes</button>
                <button>New Event</button>
                <button>View Corpers</button>

                {memberslist.map((val,key) => {

                )}
            </div>
        </div>

    )
}

export default SecretaryGeneral;