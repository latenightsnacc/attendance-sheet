const Card = (props) => {
    return (
        <div className="flex flex-row justify-between my-4">
            <div className="w-3/12 h-44 bg-green-50">
                <img src={props.img} />
            </div>
            <ul className="w-9/12 pl-5">
                <li>Name: {props.name}</li>
                <li>State Code: {props.stateCode}</li>
                <li>Batch: {props.batch}</li>
                <li>Role: {props.role}</li>
                <li>L.G.A: {props.lga}</li>
                <li>P.P.A: {props.ppa}</li>
                <li>Contact:{props.contact}</li>
                <li>Status: {props.status}</li>
            </ul>
        </div>
    )
}

export default Card;