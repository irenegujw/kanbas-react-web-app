import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules","Piazza","Zoom Meetings", "Assignments","Quizzes", "Grades","People","Panopto Video","Discussions","Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  const linkNameToUrl = str => {
    const words = str.split(' ');
    // const lowerCase = words.map(word => word.toLowerCase());
    return words.join('-');
  }

  return (
    <ul className="wd-course-navigation">
      {links.map((link, index) => {
        const urlLink = linkNameToUrl(link);
        return (
          <li>
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${urlLink}`}
              className={`${pathname.includes(urlLink) && "wd-active"}`}
            >
              {link}
            </Link>
          </li>
        )
      }
      )}
    </ul>
  );
}


export default CourseNavigation;