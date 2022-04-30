import Main from "./component/Main";
import Heading from "./component/Heading";
import Content from "./component/Content";
import Footer from "./component/Footer";

export default function Home() {
    return (
        <div className="container">
            <Heading/>
            <Main/>
            <Content/>
            <Footer/>
        </div>
    )
}
