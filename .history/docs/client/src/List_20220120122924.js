import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/create").then(console.log(res))
    }

    return(
        <div>
            <button onClick={viewAll}>View All</button>
        </div>
    )
}

export default List