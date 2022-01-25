import { useEffect, useState } from 'react';
import Axios from 'axios';

const Test = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        
            Axios.get("http://localhost:3030/corpers")
            .then(Response => {
                setList(Response.data)
            })
            .catch (error => {
                console.error("Error fetching data:", error);
                setError(error);
            })
            .finally( () => setLoading(false));
        
    })
    

    
    return (
        <div>
             
        { loading ? 'Data Loading' : list.map(val => {
            return (
                <tr key={val.id}>
                    <td>
                        <img src={val.profile_pic} alt={val.name} /> 
                    </td>
                    <td>{val.name}</td>
                    <td>{val.batch}</td>
                    <td>{val.state_code}</td>
                    <td>{val.state}</td>
                    <td>{val.lga}</td>
                    <td>{val.ppa}</td>
                    <td>{val.phone}</td>
                </tr>
            )
            
        })}
        {}
        </div>
       
    )
    
}

export default Test;