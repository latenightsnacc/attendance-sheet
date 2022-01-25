import Axios from 'axios'

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
    
        {memberslist.map((val,key) => {
            return (
                <div>
               
                    <p>{val.name}</p>
                </div>
                
            )
        })}
        
    
}

export default CardView;