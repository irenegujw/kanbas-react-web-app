import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import './index.css'

function Kanbas() {
  return (
    <div className="d-flex" style={{height: '100vh', position: 'relative'}}>
      <KanbasNavigation />
      <div style={{width: '80%'}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashborad" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;