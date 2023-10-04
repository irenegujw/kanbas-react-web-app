import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";
function Home() {
  return `
    <div class="d-block d-md-none">
    <a href="../../../kanbas/KanbasNavigation/index.html">Kanbas Navigation</a>
    <a href="../../../kanbas/Courses/CourseNavigation/index.html">Kanbas Navigation</a>
  </div>

  <div class="wd-flex-row-container" >
    
    <div class="wd-bg-color-black d-none d-md-block">
      ${KanbasNavigation()}
    </div>

    <div id="course-navi" class="d-none d-sm-block">
      ${CourseNavigation("home")}
    </div>

    <div id="course-content" class="wd-flex-grow-1" style="position:relative; left: 200px;">
      <div>
        <button type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select id="select-one">
          <option selected>Publish All</option>
          <option> Publish all items and modules </option>
          <option> Unpublish all </option>
        </select>
        <button type="button">+ Module</button>
      <hr>
      </div>

      <ul>
        <li>Week 0 - INTRO</li>
        <ul>
          <li>LEARNING OBJECTIVES</li>
          <ul>
            <li>Introduction to the course</li>
            <li>Learn what is Web Development</li>  
            <li>Creating a development environment</li>
            <li>Creating a Web Application</li>
            <li>Getting started with the 1st assignment</li>
          </ul>
          <li>READING</li>
          <ul>
            <li>Full Stack Developer - Chapter 1 - Introduction</li>
            <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
          </ul>
          <li>SLIDES</li>
          <ul>
            <li><a href="#">Introduction to Web Development Links to an external site.</a></li>
            <li><a href="#">Creating an HTTP server with Node,js Links to an external site.</a></li>
            <li><a href="#">Creating a React Application Links to an external site.</a></li>
          </ul>
        </ul>
        <li>Week 1 - HTML</li>
        <ul>
          <li>LEARNING OBJECTIVES</li>
          <ul>
            <li>Learn how to create user interfaces with HTML</li>
            <li>Keep working on assignment 1</li>
            <li>Deploy the assignment to Netlify</li>
          </ul>
          <li>READING</li>
          <ul>
            <li>Full Stack Developer - Chapter 1 - Introduction</li>
            <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
          </ul>
        </ul>
        <li>Week 2 - CSS</li>
      </ul>
    </div>

    <div class="d-none d-lg-block">
      <!-- <h2>Additional Information</h2> -->
      <h3>Course Status</h3>
      <div>
        <button type="button">Unpublish</button>
        <button type="button">Published</button>
      </div>
      <ul>
        <li><a href="#">Import Existing Content</a></li>
        <li><a href="#">Import From Commons</a></li>
        <li><a href="#">Choose Home Page</a></li>
        <li><a href="#">View Course Stream</a></li>
        <li><a href="#">New Announcement</a></li>
        <li><a href="#">New analytics</a></li>
        <li><a href="#">View Course Notifications</a></li>
      </ul>

      <h3>Coming Up</h3>
      <a href="../../../kanbas/Calendar/index.html">View Calendar</a>
      <ul>
        <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
        <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
        <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
      </ul>

  
  `;
}

export default Home;