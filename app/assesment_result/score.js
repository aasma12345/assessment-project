import React from 'react';
const Score = () => {
    return (
        <div className='score-form'>
            <div className='score-div'>
                <div className='total score'></div>
                <div className='scores'>
                    <div className='unattempt score'></div>
                    <div className='correct score'></div>
                    <div className='wrong score'></div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Score;