import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import { text } from "../styles/style";
import { TodoType } from "../types";


export interface TodoListI {
  todos: TodoType[],
  setTodos: (todos: TodoType[]) => void,
}


const todoList: React.FC<TodoListI> = ({ todos, setTodos }) => {
  const handleChangeCheckbox = (id: number) => {
    const changeTodoList = [
      ...todos.map((item: TodoType) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    ]

    setTodos(changeTodoList);
    localStorage.setItem('todos', JSON.stringify(changeTodoList));
  };

  const handleDeleteTodo = (id: number) => {
    const filterTodoList = todos.filter((item) => item.id !== id);
    setTodos(filterTodoList);
    localStorage.setItem('todos', JSON.stringify(filterTodoList));
  };
  return (
    <Box>
      {todos.length > 0 ? (
        <TableContainer>
          <Typography sx={text}>Todo Lists</Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((t: TodoType) => (
                <TableRow
                  key={t.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {t.id}
                  </TableCell>
                  <TableCell align="right">{t.todo}</TableCell>
                  <TableCell align="right">
                    <Checkbox
                      onChange={() => handleChangeCheckbox(t.id)}
                      checked={t.completed}
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => handleDeleteTodo(t.id)}
                  >
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={text}>No todo has been added yet...</Typography>
      )}
    </Box>
  );
};

export default todoList;
