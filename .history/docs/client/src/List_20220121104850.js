import {useState} from 'react';
import Axios from 'axios';
import './List.css';

const List = () => {
    const [profileList, setProfileList] = useState([]);

    try {
        Axios.get("http://localhost:3030/corpers")
        .then((Response) => {
            setProfileList(Response.data);
        });
    } catch (e) {
        console.log(e);
    }

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/corpers")
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
            <table>
            {profileList.map((val, key) => {
                return(
                    <tr className='profile'>
                       < className='detail'>{val.name}</> 
                       < className='detail'>{val.email}</> 
                       < className='detail'>{val.phone}</> 
                       < className='detail'>{val.state}</> 
                       < className='detail'>{val.state_code}</> 
                       < className='detail'>{val.lga}</> 
                       < className='detail'>{val.cds_group}</> 
                       < className='detail'>{val.ppa}</>  
                    </tr>
                )
                
            })}
            </table>
            
        </div>
    )
}

export default List