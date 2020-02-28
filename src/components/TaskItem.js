import React from 'react';

export default function TaskIem({
  task,
  index,
  taskLevel,
  updateTaskId,
  handleDelete,
  isFormVisible,
  updateTaskName,
  handleShowForm,
  handleGetIdTask,
  handleUpdateName,
  handleUpdateSave,
  handleCancelUpdate
}) {
  return (
    <tr>
      <td className='text-center'>{index + 1}</td>

      {isFormVisible && task.id === updateTaskId ? (
        <>
          <td>
            <input
              defaultValue={task.name}
              onChange={handleUpdateName}
              type='text'
              className='form-control'
            />
          </td>
          <td className='text-center'>
            <select
              defaultValue={task.level}
              className='form-control'
              required='required'
            >
              <option value='0'>Small</option>
              <option value='1'>Medium</option>
              <option value='2'>High</option>
            </select>
          </td>
          <td>
            <button
              type='button'
              className='btn btn-primary'
              idtask={task.id}
              onClick={handleUpdateSave}
            >
              Save
            </button>
            <button
              onClick={handleCancelUpdate}
              type='button'
              className='btn btn-secondary'
              value={task.id}
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td> {task.name}</td>
          <td className='text-center'>
            <span className={`badge ${taskLevel[task.level].style}`}>
              {taskLevel[task.level].name}
            </span>
          </td>
          <td>
            <button
              type='button'
              className='btn btn-warning'
              idtask={task.id}
              onClick={handleShowForm}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              type='button'
              className='btn btn-danger'
              value={task.id}
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
