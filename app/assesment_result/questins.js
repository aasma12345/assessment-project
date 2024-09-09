import React from 'react';
const Question = () => {
    return (
        <>
 
            <div className="question-num">
                <div className="filtr-correct">
                    <img className="tick-png" src="Tick.png" alt="Logo" />
                    <div className="numbers">10</div>
                    <div className="numbers">Q1</div>
                </div>
                <div className="circle-minus">
                    <div className="line"></div>
                </div>

            </div>
            <div className='lines'></div>
            <div className="question-num">
                <div className="filtr-correct">
                    <img className="tick-png" src="wrong.png" alt="Logo" />
                    <div className="numbers">10</div>
                    <div className="numbers">Q1</div>
                </div>
                <div className="circle-minus">
                    <div className="line"></div>
                </div>

            </div>
            <div className='lines'></div>
            <div className="question-num">
                <div className="filtr-correct">
                    <img className="tick-png" src="unattempt.png" alt="Logo" />
                    <div className="numbers">10</div>
                    <div className="numbers">Q1</div>
                </div>
                <div className="circle-minus">
                    <div className="line"></div>
                </div>

            </div>
            <div className='lines'></div>
        </>
    );
};

export default Question;
