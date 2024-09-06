import React from 'react';
import Pagination from './pagination';
function Headerpage() {
    return (
        <>
            <div className="headerrow ">
                <div className='header-box '>
                    <div className='logo-pagination'>
                        <div className='logo-text'>
                            <img className="logo" src="Logo Grp.png" alt="Logo" />
                            <p className="header-text">QA</p>
                        </div>
    
                        <div className='table'>
                            <Pagination />
                        </div>
                    </div>
                    <div className="submit-button-div">
                        <a href="/submission" className='submit-button'>Submit</a>
                    </div>
                </div>


            </div>

        </>
    );
}
export default Headerpage;





