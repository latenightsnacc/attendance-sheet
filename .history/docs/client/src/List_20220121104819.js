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
                    <div className='profile'>
                       <div className='detail'>{val.name}</div> 
                       <div className='detail'>{val.email}</div> 
                       <div className='detail'>{val.phone}</div> 
                       <div className='detail'>{val.state}</div> 
                       <div className='detail'>{val.state_code}</div> 
                       <div className='detail'>{val.lga}</div> 
                       <div className='detail'>{val.cds_group}</div> 
                       <div className='detail'>{val.ppa}</div>  
                    </div>
                )
                
            })}
            </table>
            
        </div>
    )
}

export default List