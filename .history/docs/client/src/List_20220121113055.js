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
                <tbody>

                </tbody>
            
            </table>
            
        </div>
    )
}

export default List