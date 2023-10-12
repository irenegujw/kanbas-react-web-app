import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BiCheckCircle } from 'react-icons/bi'
import { GrDrag } from 'react-icons/gr';
import { AiOutlineCaretRight, AiOutlineCaretDown, AiOutlinePlus, AiOutlineMore } from 'react-icons/ai';

function ModuleList() {
  const { courseId } = useParams();
  console.log(useParams())
  const modules = db.modules;
  return (
    <div className="d-flex flex-column">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index} className="module-list-item">
            <div className='module-left' >
              <GrDrag />
              <AiOutlineCaretRight />
              <h3 className='module-name'>{module.name}</h3>
            </div>
            <div className='module-right'>
              <BiCheckCircle className='green-check' />
              <AiOutlineCaretDown />
              <AiOutlinePlus />
              <AiOutlineMore />
            </div>
           </div>
      ))
      }
    </div>
  );
}
export default ModuleList;