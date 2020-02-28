import React from 'react';

export default function AddTask({ handleToogleForm }) {
  return (
    <div className='form-group add-task'>
      <button
        type='button'
        className='btn btn-info btn-block'
        onClick={handleToogleForm}
      >
        Add Task
      </button>
    </div>
  );
}
