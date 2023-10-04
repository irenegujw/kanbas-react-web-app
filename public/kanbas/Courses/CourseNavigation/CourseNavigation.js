  function CourseNavigation(active){  
    const links =[
      {name:"home", url:"../Module/home.html"},
      {name:"module", url:"../Module/home.html"},
      {name:"assignment", url:"../Module/home.html"}
    ];

    return `
    <ul class="wd-course-navigation">

      ${
        links.map(
          (link) =>
          `<li class="${
            link.name === active ? "wd-active":""}"><a href="${
              link.url
            }">${link.name}</a></li>`
        )
      .join("")}

      <li><a href="../Module/home.html">Home</a></li>
      <li class="wd-active"><a href="../Module/home.html">Module</a></li>
      <li><a href="#">Piazza</a></li>
      <li><a href="#">Zoom Meetings</a></li>
      <li><a href="../Assignments/index.html">Assignments</a></li>
      <li><a href="#">Quizzes</a></li>
      <li><a href="../Grades/grades.html">Grades</a></li>
      <li><a href="#">People</a></li>
      <li><a href="#">Panopto Video</a></li>
      <li><a href="#">Discussions</a></li>
      <li><a href="#">Announcements</a></li>
      <li><a href="#">Pages</a></li>
      <li><a href="#">Files</a></li>
      <li><a href="#">Rubrics</a></li>
      <li><a href="#">Outcomes</a></li>
      <li><a href="#">Collaborations</a></li>
      <li><a href="#">Syllabus</a></li>
      <li><a href="../Settings/coursedetail.html">Settings</a></li>
    </ul>`;
  }

  export default CourseNavigation;

  