import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { GrDrag } from 'react-icons/gr';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <div className="d-flex flex-column">  
      <div className="mb-2">
        <div className="d-flex mb-2 w-75">
          <input className="form-control border border-secondary me-2" 
                  value={module.name} 
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value } ))}
          />
          <button className="btn btn-success me-2" 
                  onClick={handleAddModule}>
            Add
          </button>
          <button className="btn btn-primary" 
                  onClick={() => handleUpdateModule()}>
            Update
          </button>
        </div>
        <textarea className="form-control border border-secondary" 
                  value={module.description} 
                  onChange={(e) => dispatch(setModule({ ...module, description: e.target.value } ))}
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
                   onClick={() => handleDeleteModule(module._id)}>
                  Delete
                </button>
                <button className="btn btn-success"
                   onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

              </div>
            </div>
            
           </div>
      ))
      }
    </div>
  );
}
export default ModuleList;