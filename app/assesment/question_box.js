
const Container = ({id,displayquestions}) => {
    console.log(displayquestions,)
    let score = 0;
    if (displayquestions.difficulty == "hard") {
      score = 20;
    } else if(displayquestions.difficulty == "medium"){
      score = 15;
    } else if(displayquestions.difficulty == "easy"){
      score = 10;
    }
   
    return (
        <>
            <div className="question-num">
                <div className="num">Question  {id}</div>
                <div className="score-num">Score +{score}</div>
            </div>
            <div className="question-content">
                <div className="question">{displayquestions.question}
                </div>
                <div className="options">
                    <label className="question-box">
                        <input type="radio" name="committee" value="Tarapore Committee" className="circle" />
                        <span className="option">Tarapore Committee</span>
                    </label>
                    <label className="question-box">
                        <input type="radio" name="committee" value="Radha Krishnan Committee" className="circle" />
                        <span className="option">Radha Krishnan Committee</span>
                    </label>
                    <label className="question-box">
                        <input type="radio" name="committee" value="Swaran Singh Committee" className="circle" />
                        <span className="option">Swaran Singh Committee</span>
                    </label>
                    <label className="question-box">
                        <input type="radio" name="committee" value="Balwantrai Mehta Committee" className="circle" />
                        <span className="option">Balwantrai Mehta Committee</span>
                    </label>
                </div>
            </div>


        </>
    )
}
export default Container;