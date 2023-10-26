import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BiCheckCircle } from 'react-icons/bi'
import { GrDrag } from 'react-icons/gr';
import { AiOutlineCaretRight, AiOutlineCaretDown, AiOutlinePlus, AiOutlineMore } from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <div className="d-flex flex-column">  
      <div className="mb-2">
        <div className="d-flex mb-2 w-50">
          <input className="form-control border border-secondary me-2" value={module.name} 
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value } ))}
          />
          <button className="btn btn-success me-2" 
                  onClick={() => dispatch(addModule({ ...module, course: courseId } ))}>
            Add
          </button>
          <button className="btn btn-primary" 
                  onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
        </div>
        <textarea className="form-control border border-secondary" value={module.description} 
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value } ))}
        />

      </div>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index} >
            <div className="module-list-item">
              <div className='module-left' >
                <GrDrag />
                <AiOutlineCaretRight />
                <h3 className='module-name'>{module.name}
                  <p>{module.description}</p>
                </h3>
              </div>
              <div className='module-right d-flex align-items-center"'>
                <button className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button className="btn btn-success"
                   onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                {/* <BiCheckCircle className='green-check' />
                <AiOutlineCaretDown />
                <AiOutlinePlus />
                <AiOutlineMore /> */}
              </div>
            </div>
            
           </div>
      ))
      }
    </div>
  );
}
export default ModuleList;