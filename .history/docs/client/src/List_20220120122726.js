import {useState} from 'react';
import Axios from 'axios';

const List = () => {
    const [profileList, setProfileList] = useState();

    const viewAll = () => {
        Axios.get()
    }

    return(
        <div>
            <button>View All</button>
        </div>
    )
}

export default List