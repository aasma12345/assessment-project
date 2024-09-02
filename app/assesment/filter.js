
const Filter = () => {
    return (
        <>
            <div className="des-only">
                <div className="filter">
                    <div className="filter-div">
                        <div className="filter-heading">filters</div>
                        <div className="filter-score">Question Score</div>
                        <div className="box">
                            <div className="filter-all">All</div>
                            <div className="filter-marks">10</div>
                            <div className="filter-marks">15</div>
                            <div className="filter-marks">20</div>
                        </div>
                        <div className="q-attempt">Questions Attempted</div>
                        <div className="total-ques">
                            <div className="attempt-all">All(40)</div>
                            <div className="attempt">Attempted(3)</div><br />
                            <div className="attempt">Unattempted(37)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mob-only">
                <div className="mob-filter">
                    
                </div>
            </div>
        </>

    )
}
export default Filter;