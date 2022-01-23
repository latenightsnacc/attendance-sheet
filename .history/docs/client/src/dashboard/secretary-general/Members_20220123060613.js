import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import Spacer from "../../components/Spacer";
import Card from "../../components/Card";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";


const Members = () => {

    const [memberslist, setMembersList] = useState([]);

    const showTable = () => {
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }
    const showCards = () => {
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const [showResults, setShowResults] = useState({
        displayCards: false,
        displayTable: false
    });

    const toggleCardDisplay = () => {
        setShowResults(!showResults.displayCards);

        showResults.displayCards ? showCards() : null;
            
        }
    }
    const toggleTableDisplay = () => {
        setShowResults(!showResults);
        showTable();
    }

   
                
}

export default Members;