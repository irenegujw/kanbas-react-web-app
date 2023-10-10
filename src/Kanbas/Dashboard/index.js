import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import coursePic1 from "../Database/course-icon-RS101.jpg";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-main-content">
      <div className="wd-top-title">
        <h2>Dashboard</h2><hr/>
      </div>
      <div className="ms-5">
        <h4>Published Courses</h4><hr/>
        <div className="d-flex flex-row flex-wrap courses-container">
          {courses.map((course) => (
            <div className="card h-100">
              <img src={coursePic1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  {course.number} {course.name}
                  </Link>        
                </h5>
                <p className="card-text">
                  from {course.startDate} <br/>
                  to {course.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}
export default Dashboard;