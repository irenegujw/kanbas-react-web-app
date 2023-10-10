import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css";
import db from "../../Database";

import {LiaBarsSolid} from "react-icons/lia";


function TopBar() {

  const {courseId} = useParams();
  const {pathname} = useLocation();
  const course = db.courses.find((course) => course._id === courseId);



  return (
    <div style={{width: '100%'}}>
      <div 
        className="wd-top-title wd-flex-row-container top-bar-breadcrumbs"
      >
        <LiaBarsSolid className="me-2 wd-top-bar-bars"/>

        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={`/Kanbas/Courses/${course._id}/home`}> 
                {course.number} {course.name}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {pathname.split("/").pop()}
            </li>
          </ol>
        </nav>
        


      </div>
    
    </div>
  );
}


export default TopBar;
