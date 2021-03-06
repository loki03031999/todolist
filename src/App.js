import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    const newTask = {id:"task"+nanoid(), name:name, completed:false};
    setTasks([...tasks,newTask ]);
  };

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(
      task => {
        if(task.id===id){
          return {...task,completed: !task.completed};
        }
        return task;
      }
    );
    setTasks(updatedTasks);
  };

  function deleteTask(id){
    const updatedTasks = [];
    for(let it=0;it<tasks.length;it++){
      if(tasks[it].id!==id) updatedTasks.push(tasks[it]);
    }
    setTasks(updatedTasks);
  };

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks.map(
    task => (
    <Todo 
    name={task.name} 
    id={task.id} 
    completed={task.completed} 
    key={task.id} 
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask} 
    editTask={editTask}/> 
    )
  );

  const headingText = `${taskList.length} ${taskList.length !== 0 ? 'tasks' : 'task'} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role = "list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
