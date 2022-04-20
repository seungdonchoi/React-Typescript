import React, { useState } from 'react';
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList';
import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}])
  }
  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewTodo onAddTodo={todoHandler}/>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
