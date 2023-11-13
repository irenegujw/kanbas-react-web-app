import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "./TopBar";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses";
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() =>{
    findCourseById(courseId);  
    },[courseId] 
  );

  return (
    <div className="wd-main-content" style={{width: '100%'}}>
      <TopBar /> 
      <div className="wd-after-top">
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-none position-absolute bottom-0 end-0"
            style={{
              left: "320px",
              top: "100px",
              paddingRight: '50px'
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>  
    </div>

  );
}
export default Courses;