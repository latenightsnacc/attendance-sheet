import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/list")
            .then((Response) => {
                console.log(Response);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div>
            <button onClick={viewAll}>View All</button>
            {profileList.map((val, key) => {
                return ( 
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default List