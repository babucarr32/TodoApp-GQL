import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../@/components/ui/table";
import { useQuery } from "@apollo/client";
import { GET_TODOS_QUERY } from "../graphql/query";
import { Todo } from "../Types/TodoType";
import AppCheckbox from "./CheckBox";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { jotaiSearchValue, jotaiTodo } from "../atoms/JotaiAtoms";
import { todosVar } from "../graphql/variables";

export function TableDemo() {
  const [todos, setTodos] = useAtom(jotaiTodo);
  const [searchResult] = useAtom(jotaiSearchValue);
  const { loading, error, data } = useQuery(GET_TODOS_QUERY, { ...todosVar });

  useEffect(() => {
    const handleSetTodo = () => {
      if (data) setTodos(data.getTodos);
    };
    handleSetTodo();
  }, [data]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Ohh ohh something went wrong</p>;

  const filteredTodos = todos.filter((todo) => {
    return JSON.stringify(todo)
      .toLowerCase()
      .includes(searchResult.toLocaleLowerCase());
  });

  console.log("filteredTodos ", searchResult);
  return (
    <div className="bg-slate-950 text-white p-10 rounded-lg h-[75vh] overflow-scroll">
      <Table>
        <TableHeader>
          <TableRow className="p-5">
            <TableHead className="w-[100px] p-5">Check</TableHead>
            <TableHead className="text-left">Status</TableHead>
            <TableHead>Todo</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTodos.map((todo: Todo, index: number) => (
            <TableRow
              key={index}
              className=" hover:bg-slate-900 border-b-2 border-slate-800"
            >
              <TableCell className="font-medium p-6 py-10">
                <AppCheckbox id={`${index}`} />
              </TableCell>
              <TableCell>{`${todo.completed}`}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell className="text-right">{todo.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
