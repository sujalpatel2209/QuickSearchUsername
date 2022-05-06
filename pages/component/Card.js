export default function Card({serverData}) {
    return (
        <a href="#" className="card">
            <h3>{serverData.service}</h3>
            <p>Available</p>
        </a>
    )
}