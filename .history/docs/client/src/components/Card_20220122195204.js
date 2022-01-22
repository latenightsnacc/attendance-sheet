const Card = (props) => {
    return (
        <div className="flex flex-row justify-between">
            <div></div>
            <ul>
                <li>Name: {props.name}</li>
                <li>State Code: {props.stateCode}</li>
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