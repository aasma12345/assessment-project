import React from 'react'
import "./score.css";
import './correct.css';
import Header from './header';
import Scores from './score';
import Footer from '../Footer';
import Correct from './correct';
import Wrong from './wrong';
import Unattempt from './unattempt';
import Question from './questins';
function page() {
    return (
        <>

            <div className='cont'>
                <Header />
                <div className='result'>
                <Scores />
                <div className='content-box'>
                    <div className='ques-div'><Correct /></div>
                    <div className='lines'></div>
                    <div className='ques-div'><Wrong /></div>
                    <div className='lines'></div>
                    <Question />
                    <div className='ques-div'><Unattempt /></div>
                    <div className='lines'></div>
                </div>
                </div>
                <Footer />
            </div>

        </>
    )
}
export default page;