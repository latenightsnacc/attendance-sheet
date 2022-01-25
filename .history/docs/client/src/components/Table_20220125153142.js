import { useEffect, useState } from 'react';
import Axios from 'axios';

const Table = (props) => {
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
        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                    <thead>
                            <tr class="h-8">
                                <th scope="col" class="text-left w-auto">No.</th>
                                <th scope="col" class="text-left hidden md:table-cell">Name</th>
                                <th scope="col" class="text-left">Statecode</th>
                                <th scope="col" class="text-left">Batch</th>
                                <th scope="col" class="text-left  hidden md:table-cell">Role</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> L.G.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> P.P.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Contact</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Status</th>
                            </tr>
                    </thead>
                    <tbody>
                        {list.map(val => {
                            return (
                                <tr key={val.id}>
                                    <td></td>
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
                    
                    </tbody>
                </table>
    );
}

export default Table