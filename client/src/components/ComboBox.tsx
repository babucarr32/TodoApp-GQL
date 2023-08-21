"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../@/lib/utils";
import { Button } from "../../@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover";
import { useAtom } from "jotai";
import { jotaiSecTodo, jotaiTodo } from "../atoms/JotaiAtoms";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { frameworks } from "../variables/vars";

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [, setTodos] = useAtom(jotaiTodo);
  const [secTodos, setSecTodos] = useAtom(jotaiSecTodo);
  const [deleteTodo] = useDeleteTodo();

  const setActiveTodos = () => {
    const active = secTodos.filter((todo) => todo.completed == false);
    setTodos(active);
  };

  const setCompletedTodos = () => {
    const completed = secTodos.filter((todo) => todo.completed !== false);
    setTodos(completed);
  };

  const setClearTodos = () => {
    const todosToDelete = secTodos.filter((todo) => todo.completed !== false);
    const completed = secTodos.filter((todo) => todo.completed == false);
    setTodos(completed);
    setSecTodos(completed);
    todosToDelete.forEach(async (todo) => {
      await deleteTodo(todo.id);
    });
  };

  const handleFilterTodo = async (value: string) => {
    if (value == "active") {
      setActiveTodos();
    }
    if (value == "all") {
      setTodos(secTodos);
    }
    if (value == "completed") {
      setCompletedTodos();
    }
    if (value == "clear completed") {
      setClearTodos();
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] bg-slate-950 flex justify-between items-center p-3 text-white border-2 border-slate-950 rounded-lg"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Filter todo..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] bg-slate-900 shadow-xl flex flex-col items-center p-3 border-2 border-slate-950 rounded-lg">
        <Command>
          <CommandInput
            placeholder="No framework..."
            className="p-2 bg-transparent text-white outline-none"
          />
          <CommandEmpty className="text-white">No match found...</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="p-3 text-white"
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  handleFilterTodo(currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
