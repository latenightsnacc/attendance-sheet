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
                       <td className='detail'>{val.name}</td> 
                       <td className='detail'>{val.email}</td> 
                       <td className='detail'>{val.phone}</td> 
                       <td className='detail'>{val.state}</td> 
                       <td className='detail'>{val.state_code}</td> 
                       <td className='detail'>{val.lga}</td> 
                       <td className='detail'>{val.cds_group}</td> 
                       <td className='detail'>{val.ppa}</td>  
                    </tr>
                )
                
            })}
            </table>
            
        </div>
    )
}

export default List