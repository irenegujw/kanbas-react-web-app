import React from 'react';
import './assignments.css';
import { AiOutlineMore } from 'react-icons/ai';

export default function SearchActionBar() {
  return (
    <div className='search-action-bar-container'>
      <input 
        type='text' 
        placeholder='Search for Assignment'
        className='form-control search-bar'
      />
      <div className='action-bar'>
        <button className='btn btn-outline-secondary action-bar-item'>
          +Group
        </button>
        <button className='btn btn-danger'>
          +Assignment
        </button>
        <button className='btn btn-outline-secondary more-icon-container'>
          <AiOutlineMore  />
        </button>
      </div>
    </div>
  )
}