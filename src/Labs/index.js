import {Link, useLocation} from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
function Labs() {
   const location = useLocation();
   
   return(
      <div className="container">
         <h1>Labs</h1>
         {JSON.stringify(location)}

         <Nav/>
         <Assignment3/>
      </div>
   )
}
export default Labs;