import React from 'react';
import TaskItem from './TaskItem';

export default function List({
  taskList,
  taskLevel,
  handleEdit,
  updateTaskId,
  handleDelete,
  isFormVisible,
  handleShowForm,
  updateTaskName,
  handleGetIdTask,
  handleUpdateName,
  handleUpdateSave,
  handleCancelUpdate
}) {
  return (
    <div className='panel panel-success'>
      <div className='panel-heading'>List Task</div>
      <table className='table table-hover '>
        <thead>
          <tr>
            <th style={{ width: '10%' }} className='text-center'>
              #
            </th>
            <th>Task</th>
            <th style={{ width: '20%' }} className='text-center'>
              Level
            </th>
            <th tyle={{ width: '160px' }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {taskList &&
            taskList.map((task, index) => {
              return (
                <TaskItem
                  task={task}
                  key={task.id}
                  index={index}
                  taskLevel={taskLevel}
                  updateTaskId={updateTaskId}
                  handleDelete={handleDelete}
                  isFormVisible={isFormVisible}
                  handleShowForm={handleShowForm}
                  updateTaskName={updateTaskName}
                  handleGetIdTask={handleGetIdTask}
                  handleUpdateName={handleUpdateName}
                  handleUpdateSave={handleUpdateSave}
                  handleCancelUpdate={handleCancelUpdate}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
