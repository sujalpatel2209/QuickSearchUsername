const Card = ({serverData}) => {
    return (
            <a href="component/Card#" className="card">
                <h3>{serverData.service}</h3>
                <p>{serverData.available ? 'Available' : 'Not Available'}</p>
            </a>
    )
}

export default Card;