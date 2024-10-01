const Questioncomponent = ({ id, displayquestion }) => {
    let score = 0;
    if (displayquestion.difficulty === "easy") {
        score=10;
    }
    else if (displayquestion.difficulty === "medium") {
        score=15;
    }
    else if (displayquestion.difficulty === "hard") {
        score=20;
    }

    return (
        <>
            <div className="question-num">
                <div className="num">Question {id}</div>
                <div className="score-num">Score +{score}</div>
            </div>
            <div className="question-content">
                <div className="question">
                    {displayquestion.question}
                    {/* Which of the following committees recommended inclusion of fundamental duties ? */}
                </div>
                <div className="options">
                    {displayquestion.options.map((option, i) => (
                        <label key={i} className="question-box">
                            <input
                                type="radio"
                                name={`question-${id}`}
                                value={option}
                                className="circle"
                            />
                            <span className="option">{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Questioncomponent;
