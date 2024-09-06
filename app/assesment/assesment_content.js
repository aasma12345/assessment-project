import Filter from "./filter";
import Container from "./container";
import Timers from './timer';
import Filter_button from './mobile-filter';
const Content = () => {
    return (
        <>
            <div className="content-box">
                <div className="timer-filter">
                    <div><Timers /></div>
                    <div><Filter_button /></div>
                    <div className="hide"><Filter /></div>
                </div>
                <div className="questions">
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                </div>
            </div>

        </>

    )
}
export default Content;
