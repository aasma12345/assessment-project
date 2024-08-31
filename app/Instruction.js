import React from 'react';
const Instructions = () => {
    return (
        <div>
            <div className='heading-text'>
               MCQ Test Portal
            </div>
            <div className="instruction-container">
                <div className='inside-div'>
                <div className='inside-heading'>Instructions</div>
                <span className='text'>Please read the instructions carefully before you begin:</span>
                
                    <ul className='text ul'>
                        <li>Timing: The test is timed. You have [specified time] minutes to
                            complete all questions.</li>
                        <li>Questions: The test comprises [number of questions] multiple
                            choice questions (MCQs).</li>
                        <li>Navigation: You can navigate between questions using the 'Next'
                            and 'Previous' buttons.</li>
                        <li>Selection: Choose the best answer for each question. You can
                            change your answers anytime before submitting.</li>
                        <li>Submission: Once you have answered all questions, click the
                            'Submit' button.You must submit before the timer runs out.</li>
                        <li>Review: After submission, you may review your answers and scores.</li>
                    </ul>
                    <div className='text'>Please ensure a stable internet connection. If you encounter any<br></br>
                        issues, contact support immediately.</div>
                    <div className='text click'>Click 'Lets Start' to begin the test.<br></br>
                    <b>Good luck!</b></div>
                </div>
                <hr className='border-top'></hr>
                <div className='button-div'>
                    <a href="/assesment" className='start-button'>Let's Start!</a>
                </div>
            </div>

            
        </div>
    );
}
export default Instructions;