import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/profileList")
            .then((Response) => {
                s(Response.data);
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
                return(
                    <div className='profile'>
                       <div className='detail'>{val.name}</div> 
                       {/* <div className='detail'>{val.email}</div> 
                       <div className='detail'>{val.phone}</div> 
                       <div className='detail'>{val.state}</div> 
                       <div className='detail'>{val.state_code}</div> 
                       <div className='detail'>{val.lga}</div> 
                       <div className='detail'>{val.cds_group}</div> 
                       <div className='detail'>{val.ppa}</div>  
                    </div> */}
                    </div>
                )
                
            })}
        </div>
    )
}

export default List