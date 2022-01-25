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
            .catch (e => {})
            .finally( () => setLoading(false));
        
    })
    const viewList = () => {
        try {
            setList({
                isLoading: true
            })
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setList({
                    isLoading: false,
                    corper: Response.data
                })
            })
        } catch (e) {
            console.log(e);
        }
    }

    
    return (
        <div>
             <button onClick={viewList}>Show</button>
        {list.corper.map(val => {
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
        </div>
       
    )
    
}

export default Test;