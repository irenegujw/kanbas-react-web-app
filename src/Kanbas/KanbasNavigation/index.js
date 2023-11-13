import { Link, useLocation } from "react-router-dom";
import { BiUserCircle , BiCalendar } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri"
import { FaBook } from "react-icons/fa"
import {SlEnvolopeLetter} from "react-icons/sl"
import {PiClockCounterClockwiseFill} from "react-icons/pi"
import {IoCloudUpload} from "react-icons/io5"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import NEUImage from '../Database/neu.png'
import "./index.css"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const { pathname } = useLocation();
  const linkToIconMap = {
    "Account":<BiUserCircle className={`${pathname.includes("Account")? "wd-icon-profile-active":"wd-icon-profile-inactive"} `} />,
    "Dashboard":<RiDashboard3Fill className="wd-icon"/>,
    "Courses":<FaBook className="wd-icon"/>,
    "Calendar":<BiCalendar className="wd-icon"/>,
    "Inbox":<SlEnvolopeLetter className="wd-icon"/>,
    "History":<PiClockCounterClockwiseFill className="wd-icon"/>,
    "Studio":<SlEnvolopeLetter className="wd-icon"/>,
    "Commons":<IoCloudUpload className="wd-icon"/>,
    "Help":<AiOutlineQuestionCircle className="wd-icon"/>
  };
  
  return (
    <div className="d-flex flex-column kanbas-nav-container" >
      <img src={NEUImage} className="wd-neu-icon"></img>
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li 
            className={` ${pathname.includes(link) && "wd-active"} `}
            style={{ padding: '0px'}}
            key={index}
          >
            <Link
              to={`/Kanbas/${link}`}
              className={`list-group-item nav-item`}
            >
              {linkToIconMap[link]}
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;