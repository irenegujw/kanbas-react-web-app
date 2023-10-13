import React from 'react';
import '../Modules/modules.css';
import { AiOutlineMore, AiOutlineCaretDown } from 'react-icons/ai';

export default function ActionBar() {
  return (
    <div className='d-flex justify-content-between module-action-container'>
      <button className='btn btn-outline-secondary module-action-button'>Collapse All</button>
      <button className='btn btn-outline-secondary module-action-button'>View Progress</button>
      <button className='btn btn-outline-secondary module-action-button'>Publish All<AiOutlineCaretDown /></button>
      <button className='btn btn-danger module-action-button-red'>+ Module</button>
      <button className='btn btn-outline-secondary more-icon'><AiOutlineMore /></button>
    </div>
  )
}