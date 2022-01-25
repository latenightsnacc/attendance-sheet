import { Component, useState } from 'react';
import Axios from 'axios';

const Test = () => {
    const [list, setList] = useState({
        isLoading: false,
        corper: []
    })

    try {
        Axios.get("http://localhost:3030/corpers")
        .then((Response) => {
            se
        })
    }
}