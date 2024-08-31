import React from "react";
const Pagination = () => {
    return (
        <>  <div className="des-only"> 
            <div className="pagination ">
                <img className="arrow-logo" src="arrowfirst.png" alt="Logo" />
                <div className="pageNo">1</div>
                <div className="pageNo">2</div>
                <div className="pageNo">3</div>
                <div className="pageNo">4</div>
                <div className="pageNo">5</div>
                <div className="pageNo">6</div>
                <div className="pageNo">7</div>
                <div className="pageNo">8</div>
                <img className="arrow-logo" src="arrow.png" alt="Logo" />
            </div>
            </div>
            <div className="mob-only">
                <div className='pagination '>
                    <div> <img src="arrow1.png" className='pageNo previous' /></div>
                    <div className='pageNo'>1</div>
                    <div className='pageNo dotespace'>...</div>
                    <div className='pageNo pointer'>5</div>
                    <div className='pageNo dotespace'>...</div>
                    <div className='pageNo'>8</div>
                    <div> <img src="arrow.png" className='pageNo next' /> </div>
                </div>
            </div>

        </>
    )
}
export default Pagination;



