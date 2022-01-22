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
            <div class="w-full md:w-5/6 md:mx-auto">
                
            </div>
            <Stats />
            <Spacer />

            <div>
                <button>New Minutes</button>
                <button>New Event</button>
                <button onClick={viewAll}>View Corpers</button>

                {memberslist.map((val,key) => {
                    return <Card 
                        name={val.name} 
                        stateCode={val.state_code} 
                        role={'Member'}
                        lga={val.lga}
                        ppa={val.ppa}
                        contact={val.phone} 
                    />
                })}
            </div>
            <Footer />
        </div>

    )
}

export default SecretaryGeneral;