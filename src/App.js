import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! �� ' }, 
    { id: 2, title: 'We love Easy Frontend! �� ' }, 
    { id: 3, title: 'They love Easy Frontend! �� ' },
  ]);
  function handleTodoClick(todo){
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex( x => x.id == todo.id );
    if(index < 0) return;
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
   <div className='app' >
    <h1>React Hooks - Todo List</h1>
    <ColorBox/>
    <TodoList todos={todoList} onTodoClick={handleTodoClick} />
   </div>
  );
}

export default App;
