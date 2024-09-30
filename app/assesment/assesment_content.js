import Filter from "./filter";
import Questioncomponent from "./question_box";
import Timers from './timer';
import Filter_button from './mobile-filter';
const Content = ({ questions }) => {
   return (
       <>
           <div className="content-box">
               <div className="timer-filter">
                   <Timers />
                   <div className="mobile-filter"><Filter_button /></div>
                   <div className="des-only"><Filter /></div>
               </div>
               <div className="questions">
                   {questions.map(function (displayquestion, index) {
                       return (
                           <Questioncomponent id={index + 1}
                               displayquestion = {displayquestion} />
                       )
                   })}
               </div>
           </div>
       </>
   )
}
export default Content;