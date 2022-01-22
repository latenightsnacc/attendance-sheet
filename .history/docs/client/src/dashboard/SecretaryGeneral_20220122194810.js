import {useState} from 'react';
import Axios from 'axios';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import SpacerSm from '../components/SpacerSm';
import Menu from '../components/Menu';
import Stats from '../components/Stats';

const SecretaryGeneral = () => {
    const [memberslist, setMembersList] = useState([]);

    const viewAll = () => {
        try {
            Axios.get("http://localhost:3030/corpers")
            .then((Response) => {
                setMembersList(Response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }
    return(
        <div>
            <Navbar />
            <Banner />
            <Spacer />
            <Menu />
            <SpacerSm />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Stats />
                <Spacer />
            </div>
            

            <div>
                <button>New Minutes</button>
                <button>New Event</button>
                <button onClick={viewAll}>View Corpers</button>

                
            </div>
            <Footer />
        </div>

    )
}

export default SecretaryGeneral;