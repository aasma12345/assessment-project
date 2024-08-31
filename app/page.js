import Header from "./Header";
import Instructions from "./Instruction";
import Footer from "./Footer";
import './globals.css';
export default function Page() {
    return (
    <>
    <div className="container">
      <Header/>
      <Instructions/>
      <Footer/>
    </div>
    </>
    )
  }