import Header from "./Header";
import Submission from './submission-form'
import './style.css';
import Footer from "./footer";
export default function Page() {
    return (
        <>
            <div className="container">
                <Header />
                <Submission />
                <Footer />
            </div>
        </>
    )
}