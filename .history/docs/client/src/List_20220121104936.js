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
            <table className='table'>
            {profileList.map((val, key) => {
                return(
                    <tr className='row'>
                       <td className='daa'>{val.name}</td> 
                       <td className='daa'>{val.email}</td> 
                       <td className='daa'>{val.phone}</td> 
                       <td className='daa'>{val.state}</td> 
                       <td className='daa'>{val.state_code}</td> 
                       <td className='daa'>{val.lga}</td> 
                       <td className='daa'>{val.cds_group}</td> 
                       <td className='daa'>{val.ppa}</td>  
                    </tr>
                )
                
            })}
            </table>
            
        </div>
    )
}

export default List