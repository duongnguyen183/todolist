import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Sort from './components/Sort';
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';
import Search from './components/Search';
import AddTask from './components/AddTask';
import taskData from './models/taskData';
import levelData from './models/levelData';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(0);
  const [toggleForm, setToggleForm] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateTaskId, setUpdateTaskId] = useState('');
  const [updateTaskName, setUpdateTaskName] = useState('');
  const [updateTaskLevel, setUpdateTaskLevel] = useState(0);
  const [inputSearch, setInputSearchl] = useState('');
  const [btnSort, setBtnSort] = useState('NAME - ASC');
  const [taskList, setTaskList] = useState(taskData);
  const [taskLevel, setTaskLevel] = useState(levelData);

  // Add Task
  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeLevel = evt => {
    setLevel(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTaskList = {
      id: uuidv4(),
      name,
      level
    };
    taskList.push(newTaskList);
    setTaskList([...taskList]);
    setName('');
    setLevel(0);
  };

  const handelCancel = evt => {
    setName('');
    setLevel(0);
  };

  const handleToogleForm = () => {
    setToggleForm(!toggleForm);
  };

  //Update Task
  const handleGetIdTask = evt => {
    const idtask = evt.target.getAttribute('idtask');
    setUpdateTaskId(idtask);
  };

  const handleUpdateName = evt => {
    setUpdateTaskName(evt.target.value);
  };
  const handleUpdatelevel = evt => {
    setUpdateTaskLevel(evt.target.value);
  };

  const handleUpdateSave = evt => {
    const updateTask = taskList.map(task =>
      task.id === updateTaskId
        ? { ...task, name: updateTaskName, level: updateTaskLevel }
        : task
    );
    setTaskList([...updateTask]);
    setIsFormVisible(false);
  };

  const handleCancelUpdate = evt => {
    setIsFormVisible(false);
  };

  const handleShowForm = evt => {
    setIsFormVisible(true);
    const idtask = evt.target.getAttribute('idtask');
    setUpdateTaskId(idtask);
  };

  // Delete Task
  const handleDelete = taskId => {
    var removeTask = taskList
      .map(function(item) {
        return item.id;
      })
      .indexOf(taskId);

    ~removeTask && taskList.splice(removeTask, 1);
    setTaskList([...taskList]);
  };

  // Search Task
  const handleChangeSearch = evt => {
    setInputSearchl(evt.target.value);
    var textToSearch = evt.target.value;
    var filteredArray = taskList.filter(task => {
      // return task.name.toLowerCase().indexOf(textToSearch.toLowerCase()) >= 0;
      return task.name.toLowerCase().indexOf(textToSearch.toLowerCase()) > -1;
    });
    setTaskList(filteredArray);
    if (evt.target.value === '') {
      setTaskList(taskData);
    }
  };

  const handleClear = evt => {
    setInputSearchl('');
    setTaskList(taskData);
  };

  // Sort Task
  const handleSort = evt => {
    const type = evt.target.getAttribute('filtertype');
    const order = evt.target.getAttribute('filterorder');
    taskList.sort(function(a, b) {
      if (type === 'name') {
        if (a.name < b.name) {
          if (order === 'desc') {
            return 1;
          }
          return -1;
        }
        if (a.name > b.name) {
          if (order === 'desc') {
            return -1;
          }
          return 1;
        }
      }
      if (type === 'level') {
        if (a.level < b.level) {
          if (order === 'desc') {
            return 1;
          }
          return -1;
        }
        if (a.level > b.level) {
          if (order === 'desc') {
            return -1;
          }
          return 1;
        }
      }

      return 0;
    });
    setTaskList([...taskList]);
    setBtnSort(type.toUpperCase() + ' - ' + order.toUpperCase());
  };

  return (
    <Container>
      <Header />
      <Row>
        <Col md={12} lg={6}>
          <Row>
            <Sort handleSort={handleSort} btnSort={btnSort} />
            <Search
              inputSearch={inputSearch}
              handleChangeSearch={handleChangeSearch}
              handleClear={handleClear}
            />
          </Row>
        </Col>
        <Col md={12} lg={6}>
          <AddTask handleToogleForm={handleToogleForm} />
          {toggleForm ? (
            <Form
              name={name}
              level={level}
              toggleForm={toggleForm}
              handelCancel={handelCancel}
              handleSubmit={handleSubmit}
              handleChangeName={handleChangeName}
              handleChangeLevel={handleChangeLevel}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
      <List
        taskList={taskList}
        taskLevel={taskLevel}
        updateTaskId={updateTaskId}
        handleDelete={handleDelete}
        isFormVisible={isFormVisible}
        handleShowForm={handleShowForm}
        updateTaskName={updateTaskName}
        handleGetIdTask={handleGetIdTask}
        handleUpdateSave={handleUpdateSave}
        handleUpdateName={handleUpdateName}
        handleUpdatelevel={handleUpdatelevel}
        handleCancelUpdate={handleCancelUpdate}
      />
    </Container>
  );
}

export default App;
