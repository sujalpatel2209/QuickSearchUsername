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

    // const checkUrl = 'https://api.instantusername.com'+service.endpoint.replace('{username}', username);
    //
    //
    //  fetch(checkUrl)
    //     .then(r => console.log(r.json()))
    //     .then((res) => {
    //        return res;
    //     });

    // console.log(username);
    // console.log('call function', username);
}