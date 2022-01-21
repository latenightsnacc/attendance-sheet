import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/create", () => {
                console.log()
            }
    }

    return(
        <div>
            <button>View All</button>
        </div>
    )
}

export default List