import {useState} from 'react';
import Axios from 'axios';
import Table from './components/Table';

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
            <table className='w-full bg-slate-50 table-auto text-left'>
                <thead>
                    <tr>
                        <th>Corper</th>
                        <th colSpan={5}>NYSC</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Batch</th>
                        <th>State Code</th>
                        <th>State</th>
                        <th>L.G.A</th>
                        <th>PPA</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                {profileList.map((val, key) => {
                return(
                    <Table 
                                name={val.name}
                                statecode={val.state_code}
                                batch={val.batch}
                                role
                                lga={val.lga}
                                ppa={val.ppa}
                                phone={val.phone}
                    <tr className='row'>
                         
                       <td className='data'>{val.name}</td>
                       <td className='data'>Batch 21A</td> 
                       <td className='data'>{val.state_code}</td>
                       <td className='data'>{val.state}</td>
                       <td className='data'>{val.lga}</td>  
                       <td className='data'>{val.ppa}</td>    
                       <td className='data'>{val.email}</td> 
                       <td className='data'>{val.phone}</td> 
                       
                       
                       
                    </tr>
                )
                
            })}
                </tbody>
            
            </table>
            
        </div>
    )
}

export default List