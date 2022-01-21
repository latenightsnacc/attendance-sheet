import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/profilelist")
            .then((Response) => {
                setProfileList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div>
            <h1>List of Corpers</h1>

            <button onClick={viewAll}>View All</button>

            {profileList.map((val, key) => {
                return <div className='profile'>
                       <div className='detail'>{val.name}</div> 
                    </div>
                
            })}
        </div>
    )
}

export default List