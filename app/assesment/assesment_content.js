import Filter from "./filter";
import Container from "./question_box";
import Timers from './timer';
import Filter_button from './mobile-filter';
const Content = ({ questions }) => {
    // console.log(question)

    return (
        <>
            <div className="content-box">
                <div className="timer-filter">
                    <Timers />
                    <div className="mobile-filter"><Filter_button /></div>
                    <div className="des-only"><Filter /></div>
                </div>
                <div className="questions">
                    {questions.map(function (displayquestions, index) {
                        // console.log(displayquestions.questions)
                        return (
                        
                            <Container id={index+1}
                            displayquestions={displayquestions} />
                        )
                    }
                    )
                    }
                    {/* <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container /> */}
                </div>
            </div>

        </>

    )
}
export default Content;
