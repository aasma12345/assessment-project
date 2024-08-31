
import './style.css';
import Headerpage from './assessment_header';
import Footer from './Footer';
import Content from './assesment_content'
export default function Page() {
    return (
    <>
    <div className="container-div">
        <Headerpage/>
        <Content/>
        <Footer/>

    </div>
    </>
    )
}