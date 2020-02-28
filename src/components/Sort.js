import React from 'react';
import Col from 'react-bootstrap/Col';

export default function Sort({ handleSort, btnSort }) {
  return (
    <Col md={12}>
      <div className='form-group'>
        <div className='dropdown'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Sort by
          </button>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a
              className='dropdown-item'
              href='/#'
              filtertype='name'
              filterorder='asc'
              onClick={handleSort}
            >
              Name ASC
            </a>
            <a
              className='dropdown-item'
              href='/#'
              filtertype='name'
              filterorder='desc'
              onClick={handleSort}
            >
              Name DESC
            </a>
            <div className='dropdown-divider'></div>
            <a
              className='dropdown-item'
              href='/#'
              filtertype='level'
              filterorder='asc'
              onClick={handleSort}
            >
              Level ASC
            </a>
            <a
              className='dropdown-item'
              href='/#'
              filtertype='level'
              filterorder='desc'
              onClick={handleSort}
            >
              Level DESC
            </a>
          </div>
          <span className='badge badge-success badge-medium'>{btnSort}</span>
        </div>
      </div>
    </Col>
  );
}
