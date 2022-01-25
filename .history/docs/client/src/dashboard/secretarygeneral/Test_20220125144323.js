import { Component, useState } from 'react';
import Axios from 'axios';

const Test = () => {
    const [list, setList] = useState({
        isLoading: false,
        corper: []
    })

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
        
    })
}