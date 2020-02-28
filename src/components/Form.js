import React from 'react';

export default function Form({
  name,
  level,
  handleChangeName,
  handleChangeLevel,
  handleSubmit,
  handelCancel
}) {
  return (
    <form
      className='form-inline justify-content-between'
      onSubmit={handleSubmit}
    >
      <div className='form-group'>
        <label className='sr-only' htmlFor=''>
          label
        </label>
        <input
          value={name}
          onChange={handleChangeName}
          type='text'
          className='form-control'
          placeholder='Task Name'
        />
      </div>
      <div className='form-group'>
        <label className='sr-only' htmlFor=''>
          label
        </label>
        <select
          value={level}
          onChange={handleChangeLevel}
          name='ds'
          className='form-control'
          required='required'
        >
          <option value='0'>Small</option>
          <option value='1'>Medium</option>
          <option value='2'>High</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
      <button
        type='button'
        className='btn btn-secondary'
        onClick={handelCancel}
      >
        Cancel
      </button>
    </form>
  );
}
