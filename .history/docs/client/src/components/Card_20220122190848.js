const Card = (props) => {
    return (
        <div>
            <div></div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Name: {props.stateCode}</li>
                <li>Name: {props.role}</li>
                <li>Name: {props.lga}</li>
                <li>Name: {props.ppa}</li>
                <li>Contact:{}</li>
                <li>Name: {props.status}</li>
            </ul>
        </div>
    )
}

export default Card;