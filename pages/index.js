import Main from "./component/Main";
import Heading from "./component/Heading";
import Footer from "./component/Footer";
import Content from "./component/Content";
import {useState} from "react";

export default function Home() {

    const [username, setUsername] = useState('');

    const setInputValue = (val) => {
        setUsername(val);
    }

    return (
        <div className="container">
            <Heading/>

            <Main username={username} setInputValue={setInputValue}/>

            <Content username={username}/>

            <Footer/>
        </div>
    )
}
