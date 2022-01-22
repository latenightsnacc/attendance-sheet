import {useState} from 'react';
import Axios from 'axios';

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
        <div className='w-11/12 m-auto p-10'> 
            <h1 className='text-3xl'>List of Corpers</h1>

            <button onClick={viewAll}>View All</button>
            <div>
                <h3>{profileList.cds_group}Enugu State</h3>
            </div>
            <table className='w-10/12 table-auto'>
                <thead>
                    <th>
                        <td>Corper</td>
                        <td>NYSC</td>
                        <td>Contact</td>
                    </th>
                    <th>
                        <td>Name</td>
                        <td>Batch</td>
                        <td>State Code</td>
                        <td>State</td>
                        <td>L.G.A</td>
                        <td>PPA</td>
                        <td>Email</td>
                        <td>Phone</td>

                    </th>
                </thead>
                <tbody>
                {profileList.map((val, key) => {
                return(
                    <tr className='row'>
                        <td className='data'>{val.state_code}</td> 
                       <td className='data'>{val.name}</td> 
                       <td className='data'>{val.state_code}</td> 
                       <td className='data'>{val.email}</td> 
                       <td className='data'>{val.phone}</td> 
                       <td className='data'>{val.state}</td> 
                       
                       <td className='data'>{val.lga}</td> 
                       <td className='data'>{val.cds_group}</td> 
                       <td className='data'>{val.ppa}</td>  
                    </tr>
                )
                
            })}
                </tbody>
            
            </table>
            
        </div>
    )
}

export default List