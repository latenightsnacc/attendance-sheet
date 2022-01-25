import Axios from 'axios';
import {useState} from 'react';

const CardView = () => {
    const [memberslist, setMembersList] = useState([]);
    // const viewAll = () => {
        
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }

    {memberslist.map( (val, key) => <p>{val.name}</p>);
      
    }


export default CardView;