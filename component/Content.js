import socials from '../utils/services.js';
import {useEffect, useState} from "react";
import Card from "./Card";


const Content = ({username}) => {

    const [resJson, setResJson] = useState([]);
    let finalArray = [];
    /**
     *
     * @param service
     * @param username
     */
    const verifyUsername = () => {
        // console.log(service.endpoint.replace('{username}', username);
        socials.map(async (service, index) => {
            // console.log(service.endpoint.replace('{username}', username));
            const checkUrl = 'https://api.instantusername.com' + service.endpoint.replace('{username}', username);
            await fetchData(checkUrl);
        })
    }

    const fetchData = async (checkUrl) => {
        const res = await fetch(checkUrl);
        const json = await res.json();
        finalArray = [...finalArray, json];
        setResJson(finalArray);
    }

    useEffect(() => {
        {
            username ? verifyUsername() : <></>
        }
    }, [username]);

    return (
        <div className='grid'>
            {resJson ?
                resJson.map((response, index) => <Card serverData={response} key={index}/>
                ) : <></>
            }
        </div>
    );
}

export default Content;