import TodoList from './components/TodoList';
import { Box } from '@mui/material';
import { container } from './styles/style';
import CreateTodo from './components/CreateTodo';
import { useEffect, useState } from 'react';
import {TodoType} from './types';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    if(localTodos) {
      setTodos(JSON.parse(localTodos));
    };
  }, [])

  return (
    <Box sx={container}>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  );
}

export default App;
