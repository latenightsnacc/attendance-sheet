

const Card = (props) => {
    
    return (
        <div className="flex flex-row items-center justify-between my-4 border-1 border-green-400">
            <div className="w-3/12 h-44 bg-green-50">
                <img src={props.imgSrc} alt={props.altText} />
            </div>
            <ul className="w-9/12 pl-5 text-sm">
                <li className="my-1">Name: {props.name}</li>
                <li className="my-1">State Code: {props.stateCode}</li>
                <li className="my-1">Batch: {props.batch}</li>
                <li className="my-1">Role: {props.role = 'Member'}</li>
                <li className="my-1">L.G.A: {props.lga}</li>
                <li className="my-1">P.P.A: {props.ppa}</li>
                <li className="my-1">Contact:{props.contact}</li>
                {/* <li>Status: {props.status}</li> */}
            </ul>
        </div>
    )
}

export default Card;