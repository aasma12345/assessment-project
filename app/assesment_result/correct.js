import React from 'react';

const Correct=()=> {
  return (
    <div className='rightQuestionCard'>
      <div className="questionScoreNo">
        <div className="questionNo"><img src="Tick.png" alt="Tick" /> <b>10</b> <b>Q1</b></div>
        <div className="scoreNo"><img src="blackdivimg.png" alt="Score" /></div>
      </div>
      <div className="mcqBox">
        <div className="mcqQuestion">
          Which of the following committees recommended inclusion of fundamental duties?
        </div>
        <div className="mcqOption">
          <div className="radiodiv">
            <input type="radio" id="option1" name="committee" value="option1" className="radioButton" />
            <label htmlFor="option1">Tarapore Committee</label><br /><br />
          </div>
          <div className="radiodiv">
            <input type="radio" id="option2" name="committee" value="option2" className="radioButton" />
            <label htmlFor="option2">Radha Krishnan Committee</label><br /><br />
          </div>
          <div className="radiodiv">
            <input type="radio" id="option3" name="committee" value="option3" className="radioButton" />
            <label htmlFor="option3">Swaran Singh Committee</label><br /><br />
          </div>
          <div className="radiodiv">
            <input type="radio" id="option4" name="committee" value="option4" className="radioButton" />
            <label htmlFor="option4">Balwantrai Mehta Committee</label><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Correct;