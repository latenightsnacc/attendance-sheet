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
            <table className='table-auto'>
                <thead></thead>
            {profileList.map((val, key) => {
                return(
                    <tr className='row'>
                       <td className='data'>{val.name}</td> 
                       <td className='data'>{val.email}</td> 
                       <td className='data'>{val.phone}</td> 
                       <td className='data'>{val.state}</td> 
                       <td className='data'>{val.state_code}</td> 
                       <td className='data'>{val.lga}</td> 
                       <td className='data'>{val.cds_group}</td> 
                       <td className='data'>{val.ppa}</td>  
                    </tr>
                )
                
            })}
            </table>
            
        </div>
    )
}

export default List