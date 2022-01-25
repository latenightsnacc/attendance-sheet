import { useState } from 'react';
import Axios from 'axios';

const Test = () => {
    const [list, setList] = useState({
        isLoading: false,
        corper: []
    })

    const 

    try {
        setList({
            isLoading: true,
            corper: []
        })
        Axios.get("http://localhost:3030/corpers")
        .then((Response) => {
            setList({
                isLoading: false,
                corper: [Response.data]
            })
        })
    } catch (e) {
        console.log(e);
    }

    list.corper.map(val => {
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
        
    })
}

export default Test;