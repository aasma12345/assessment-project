import React from 'react';
const Submission = () => {
    return (

        <div className='form-page'>
            <div className='div'>
                <div className='img-tick'>
                    <img className="tick-img" src="Tick.png" alt="Logo" />
                </div>
                <div className='submission-form'>
                    <div className='sub-text '>Successfully Sumbitted</div>
                    <div className='subm-text'>Thank you for completing the test! </div>
                    <div className='submi-text'> Review your results and keep practicing.
                        Great job and keep up the hard work! </div>
                </div>
                <div className="submission-button-div">
                    <a href="/assesment_result" className='submission-button'>Check Your Score</a>
                </div>

            </div>
        </div>
    );
}
export default Submission;