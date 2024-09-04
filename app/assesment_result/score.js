import React from 'react';

const Score = () => {
  return (
    <>
      <div className="score-form">
        <div className="score-div">
          <div className="total score">
            35/40
            <div className="your-score">Your Scored</div>
          </div>
          <div className="scores">
            <div className="unattempt score">
              <div className="imgage">
                <img className="un-img" src="unattempt.png" alt="Logo" />
              </div>
              <div className="unatemp">
                <div className="texted">Unattempted:</div>
                <div className="texted">3</div>
              </div>
            </div>
            <div className='stand-line'></div>
            <div className="correct score">
              <div className="imgage">
                <img className="cor-img" src="Tick.png" alt="Logo" />
              </div>
              <div className="correted">
                <div className="texted">Correct:</div>
                <div className="texted">35</div>
              </div>
            </div>
            <div className='stand-line'></div>
            <div className="wrong score">
              <div className="imgage">
                <img className="wro-img" src="wrong.png" alt="Logo" />
              </div>
              <div className="worg">
                <div className="texted">Wrong:</div>
                <div className="texted">2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
