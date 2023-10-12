import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import './assignmentEditor.css';
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineMore } from 'react-icons/ai';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className='assignment-editor-section'>
      <div className='top-action-bar'>
        <div className='published'>
          <AiFillCheckCircle /> 
          <p style={{margin: '0px'}}>Published</p>
        </div>
        <button className='btn btn-outline-secondary more-icon-container'>
          <AiOutlineMore style={{position: 'relative'}} />
        </button>
      </div>

      <div className='name-editor'>
        <label style={{width: '100%'}}>Assignment Name
          <input 
            value={assignment.title}
            className="form-control name-input"
            style={{width: '100% !important'}}
          />
        </label>
      </div>

      <div className='cancel-save-bar'>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-secondary">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;