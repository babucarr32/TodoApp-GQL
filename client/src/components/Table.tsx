import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../@/components/ui/table";
import { useMutation, useQuery } from "@apollo/client";
import { CHANGE_STATUS, DELETE_TODO, GET_TODOS_QUERY } from "../graphql/query";
import { Todo } from "../Types/TodoType";
import AppCheckbox from "./CheckBox";
import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  jotaiAddTodo,
  jotaiEditTodo,
  jotaiSearchValue,
  jotaiTodo,
  jotaiTodoId,
} from "../atoms/JotaiAtoms";
import { todosVar } from "../graphql/variables";
import { handleFilterSearch } from "../actions/handleFilterSearch";

export function TableDemo() {
  const [todos, setTodos] = useAtom(jotaiTodo);
  const [searchResult] = useAtom(jotaiSearchValue);
  const { loading, error, data } = useQuery(GET_TODOS_QUERY, { ...todosVar });
  const [changeStatus] = useMutation(CHANGE_STATUS);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [, setEditTodo] = useAtom(jotaiAddTodo);
  const [, setTodoId] = useAtom(jotaiTodoId);
  const [, setIsEditTodo] = useAtom(jotaiEditTodo);

  useEffect(() => {
    const handleSetTodo = () => {
      if (data) setTodos(data.getTodos);
    };
    handleSetTodo();
  }, [data]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Ohh ohh something went wrong</p>;

  const filteredTodos = handleFilterSearch(todos, searchResult);

  const handleEditTodo = (id: string) => {
    const result = todos.find((todo) => todo.id == id);
    setEditTodo({ description: result?.description as string });
    setIsEditTodo(true);
    setTodoId(id);
  };

  const handleDeleteTodo = async (id: string) => {
    const result = todos.find((todo) => todo.id == id);
    if (result) {
      const newTodo = [...todos];
      newTodo.splice(newTodo.indexOf(result), 1);
      setTodos(newTodo);
      await deleteTodo({
        variables: {
          id: id,
        },
      });
    }
  };

  const handleChecked = async (id: string, status: boolean, cb: Function) => {
    await changeStatus({
      variables: {
        id: id,
        completedInput: {
          completed: !status,
        },
      },
    });
    const result = todos.find((todo) => todo.id == id);
    if (result) {
      const result2 = { ...result };
      result2.completed = !status;

      const newTodos = [...todos];
      newTodos.splice(newTodos.indexOf(result), 1, result2);
      setTodos([...newTodos]);
      cb();
    }
  };

  return (
    <div className="bg-slate-950 text-white p-10 rounded-lg h-[75vh] overflow-scroll">
      {!filteredTodos.length ? (
        <div className="relative h-full w-full">
          <p className="text-[3em] text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            No todo's available...
          </p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="p-5">
              <TableHead className="w-[100px] p-5">Check</TableHead>
              <TableHead className="text-left">Status</TableHead>
              <TableHead>Todo</TableHead>
              <TableHead className="text-left">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTodos.map((todo: Todo, index: number) => (
              <TableRow
                key={index}
                className=" hover:bg-slate-900 border-b-2 border-slate-800"
              >
                <TableCell className="font-medium p-6 py-10">
                  <AppCheckbox
                    id={`${todo.id}`}
                    status={todo.completed}
                    handleChecked={handleChecked}
                  />
                </TableCell>
                <TableCell>{`${todo.completed}`}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell className="text-left">{todo.createdAt}</TableCell>
                <TableCell
                  className="text-left text-red-500 cursor-pointer"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </TableCell>
                <TableCell
                  className="text-left text-blue-500 cursor-pointer"
                  onClick={() => handleEditTodo(todo.id)}
                >
                  Edit
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
