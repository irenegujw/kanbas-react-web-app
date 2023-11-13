import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import React, { useState, useEffect } from "react";
import './index.css'
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = async() => {
    const response = await axios.post(URL, course);
    setCourses((prevCourses) => [...prevCourses, response.data]);
    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    });
  };

  const deleteCourse = async(course) => {
    try {
      await axios.delete(`${URL}/${course._id}`);
      setCourses((prevCourses) =>
        prevCourses.filter((c) => c._id !== course._id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  
  const updateCourse = async (courseToUpdate) => {
    try {
      const sanitizedCourse = JSON.parse(JSON.stringify(courseToUpdate));

    const response = await axios.put(`${URL}/${courseToUpdate._id}`, sanitizedCourse);
    
    setCourses((prevCourses) =>
      prevCourses.map((c) =>
        c._id === courseToUpdate._id ? response.data : c
      )
    );

    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    });
    
    } catch (error) {
      console.error("Error updating course:", error);
    };
  
  };
  return (
    <Provider store={store}>
      <div className="d-flex" style={{height: '100vh', position: 'relative'}}>
        <KanbasNavigation />
        <div style={{width: '80%'}}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>

              } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;