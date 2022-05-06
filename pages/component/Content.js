import Card from "./Card";
import socials from '../../utils/services.js';

export default function Content({username}) {
    return (
        <div className='grid'>
            { username !== '' ?
                socials.map((service, index) => {

                    // Call VerifyUsername Function
                    verifyUsername(service, username);

                    return (
                        <Card
                            key={index}
                            serverData={service}
                        />
                    )
                }) : <></>
            }
        </div>
    );
}

/**
 *
 * @param service
 * @param username
 */
const verifyUsername = (service, username) => {
    // console.log(process.env.NEXT_PUBLIC_API_URL);

    const checkUrl = process.env.NEXT_PUBLIC_API_URL+service.endpoint.replace('{username}', username);

    // fetch(checkUrl)
    //     .then(r => console.log(r.json()));

    // console.log(username);
    // console.log('call function', username);
}