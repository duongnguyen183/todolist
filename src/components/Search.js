import React from 'react';
import Col from 'react-bootstrap/Col';

export default function Search({
  handleChangeSearch,
  inputSearch,
  handleClear
}) {
  return (
    <Col md={12}>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for...'
          value={inputSearch}
          onChange={handleChangeSearch}
        />
        <span className='input-group-append'>
          <button className='btn btn-info' type='button' onClick={handleClear}>
            Clear!
          </button>
        </span>
      </div>
    </Col>
  );
}
