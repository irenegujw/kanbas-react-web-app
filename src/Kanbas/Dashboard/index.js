import { Link } from "react-router-dom";
import { React } from "react";
import axios from "axios";
import "./index.css"
import coursePic1 from "../Database/course-icon-RS101.jpg";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }  
) {

  const URL = "http://localhost:4000/api/courses";

  return (
    <div className="wd-main-content">
      <div className="wd-top-title">
        <h2>Dashboard</h2><hr/>
      </div>
      <div className="ms-5">
        <h4>Published Courses</h4><hr/>

        <div className="float-end">
          <h5>Course</h5>
          <input value={course.name} className="form-control mb-1 border border-secondary"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control mb-1 border border-secondary"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control mb-1 border border-secondary" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control mb-1 border border-secondary" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          <button className="btn btn-success me-2" onClick={addNewCourse} >
            Add
          </button>
          <button className="btn btn-primary" onClick={() => updateCourse(course)} >
            Update
          </button>

        </div>


        <div className="d-flex flex-row flex-wrap courses-container">
          {courses.map((courseItem) => (
            <div key={courseItem._id} className="card">
              <img src={coursePic1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Kanbas/Courses/${courseItem._id}`}>
                    {courseItem.number} {courseItem.name}
                  </Link>
                </h5>
                <p className="card-text">
                  from {courseItem.startDate} <br/>
                  to {courseItem.endDate}
                </p> 
                <div className="float-end bottom">    
                  <button key={`edit-${courseItem._id}`}
                    className="btn btn-warning" onClick={(event) => {
                    event.preventDefault();
                    setCourse(courseItem);}}>
                    Edit
                  </button>

                  <button className="btn btn-danger ms-1"
                    onClick={(event) => {
                    event.preventDefault();
                    console.log("Deleting course with ID:", courseItem._id);
                    deleteCourse(courseItem);}}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}
export default Dashboard;