import React from 'react'
import "./score.css";
import './correct.css';
import Header from './header';
import Score from './score';
import Footer from '../Footer';
import Correct from './correct';
function page() {
    return (
        <>
            <Header />
            <div className='result'>

                <Score />
                <div className='content-box'>
                    <Correct />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default page;