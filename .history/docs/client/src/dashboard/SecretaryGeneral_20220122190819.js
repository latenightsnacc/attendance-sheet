import {useState} from 'react';
import Axios from 'axios';
import Card from '../components/Card'

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
                <button onClick={viewAll}>View Corpers</button>

                {memberslist.map((val,key) => {
                    return <Card 
                        name={val.name} 
                        stateCode={val.state_code} 
                        role={'Member'}
                        lga={val.lga}
                        ppa={val.ppa} 
                    />
                })}
            </div>
        </div>

    )
}

export default SecretaryGeneral;