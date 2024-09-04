import React from 'react'
import "./style.css";
import Header from './header';
import Score from './score';
import Footer from '../Footer';
function page(){
    return (
        <div>
            <Header />
            <Score/>
            <Footer/>
        </div>
    )
}
export default page;