import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import SpacerSm from '../components/SpacerSm';
import Menu from '../components/Menu';
import Stats from '../components/Stats';

const Notes = () => {
    
    return(
        <div>
            <Navbar />
            <Banner />
            <Spacer />
            
            <div className="w-full md:w-5/6 md:mx-auto">
                <Menu />
                <SpacerSm />
                <Stats  display={display} list={viewAll} />
                <Spacer />

            </div>
            
            {/* <Members /> */}
            
            <Footer />
        </div>

    )
}

export default Notes;