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
        {memberslist.map((val,key) => {
            return (
                <div className="flex flex-row items-center justify-between my-4 border-1 border-green-400">
                    <div className="w-3/12 h-44 bg-green-50">
                        <img src={val.imgSrc} alt={val.altText} />
                    </div>
                    <ul className="w-9/12 pl-5 text-sm">
                        <li className="my-1">Name: {val.name}</li>
                        <li className="my-1">State Code: {val.stateCode}</li>
                        <li className="my-1">Batch: {val.batch}</li>
                        <li className="my-1">Role: {val.role = 'Member'}</li>
                        <li className="my-1">L.G.A: {val.lga}</li>
                        <li className="my-1">P.P.A: {val.ppa}</li>
                        <li className="my-1">Contact:{val.contact}</li>
                        
                    </ul>
                </div>
            )
        })}
    
}

export default CardView;