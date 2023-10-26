import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import "./index.css"
import coursePic1 from "../Database/course-icon-RS101.jpg";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }  
) {
  // const [courses, setCourses] = useState(db.courses);
 
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;} 
  //       else {
  //         return c;}
  //     })
  //   );
  // };
  
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
          <button className="btn btn-primary" onClick={updateCourse} >
            Update
          </button>

        </div>


        <div className="d-flex flex-row flex-wrap courses-container">
          {courses.map((course) => (
            <div className="card">
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
                <div className="float-end bottom">    
                  <button className="btn btn-warning" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);}}>
                    Edit
                  </button>

                  <button className="btn btn-danger ms-1"
                    onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);}}>
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