import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './assignments.css';
import SearchActionBar from "./SearchActionsBar";
import { GrDrag } from 'react-icons/gr';
import { AiOutlineCaretDown, AiOutlinePlus, AiOutlineMore, AiFillCheckCircle  } from 'react-icons/ai';
import { MdOutlineAssignment } from 'react-icons/md';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className='assignments-section'>
      <SearchActionBar />
      <div className="assignments-list">
        <div className='assignment-item top-item'>
          <div className='assignment-item-left'>
            <GrDrag />
            <AiOutlineCaretDown />
            <p className='assignments-header'>ASSIGNMENTS</p>
          </div>
          <div className='assignment-item-right'>
            <div className='total-percentage'>
              40% of Total
            </div>
            <AiOutlinePlus />
            <AiOutlineMore  />
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <div className='assignment-item common-item'>
            <div className='assignment-item-left'>
              <GrDrag />
              <MdOutlineAssignment className='green' />
              <div className='details-container'>
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="assignment-link"
                >
                  {assignment.title}
                </Link>
                <div className='details-bottom-row' >
                  <p className='red'>Multiple Modules</p>
                  <p> | Due {assignment.dueDate} | 100 pts</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='assignment-item-right'>
              <AiFillCheckCircle className='green' />
              <AiOutlineMore  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;