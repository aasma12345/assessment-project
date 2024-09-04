import Filter from "./filter";
import Container from "./container";
import Timers from './timer';
import Footer from './Footer';
const Content = () => {
    return (
        <>
            <div className="content-box">
                <Timers />
                <Filter />
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
