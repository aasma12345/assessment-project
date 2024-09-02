import Header from "./header";
import './style.css';
import Footer from "./footer";
import Score from "./score"; 
export default function Page() {
    return (
        <>
            <div className="container">
                <Header />
                <Score/>
                <Footer />
            </div>
        </>
    )
}