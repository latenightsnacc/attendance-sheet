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
import Members from './secretarygeneral/Members';

const SecretaryGeneral = () => {
    const [memberslist, setMembersList] = useState([]);
    const [display, setDisplay] = useState()

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
            
            <div className="w-full md:w-5/6 md:mx-auto">
                <Menu />
                <SpacerSm />
                <Stats list={viewAll} />
                <Spacer />
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
            
            {/* <Members /> */}
            
            <Footer />
        </div>

    )
}

export default SecretaryGeneral;