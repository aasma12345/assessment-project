const Questioncomponent = ({ id, displayquestion }) => {
    return (
        <>
            <div className="question-num">
                <div className="num">Question 1</div>
                <div className="score-num">Score +1</div>
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
