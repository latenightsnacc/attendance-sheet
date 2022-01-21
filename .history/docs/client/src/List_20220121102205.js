import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/profileList")
            .then((Response) => {
                setProfileList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div className='list'> 
            <h1>List of Corpers</h1>

            <button onClick={viewAll}>View All</button>
            
        </div>
    )
}

export default List