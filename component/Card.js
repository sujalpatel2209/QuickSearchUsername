const Card = ({serverData}) => {
    return (
            <a href={serverData.url} className="card">
                <h3>{serverData.service}</h3>
                <p>{serverData.available ? 'Available' : 'Not Available'}</p>
            </a>
    )
}

export default Card;