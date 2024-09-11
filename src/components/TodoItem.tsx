import { useState } from "react";
import { useTodoStore } from "../utils/store";
import { Button } from "@mui/material";

interface ITodoItemProps {
  todo: TodoList;
  index: number;
}

interface TodoList {
  todo: string;
  date: number;
  done: boolean;
}

const TodoItem = ({ todo, index }: ITodoItemProps) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodoList);
  const doneTodo = useTodoStore((state) => state.doneTodoList);

  const [hasAction, setHasAction] = useState<boolean>(false);
  
  const getTime = (time: number, type: string) => {
    const format = new Date(time);
    if (type === "date") {
      return format.getDate() < 10 ? "0" + format.getDate() : format.getDate();
    } else if (type === "month") {
      return format.getMonth() + 1 < 10
        ? "0" + (format.getMonth() + 1)
        : format.getMonth() + 1;
    } else {
      return format.getFullYear();
    }
  };
  return (
    <div
      className="flex justify-between items-center bg-zinc-200 rounded-md py-5 px-3"    
    >
      <div className="grow-0 shrink-0 basis-16 bg-zinc-100 rounded-t-xl rounded-b h-full mr-4 flex items-center justify-center flex-col">
        <div className="bg-red-500 text-white p-1 text-sm w-full text-center rounded-t">
          วันที่
        </div>
        <span className="text-xl h-9">{getTime(todo.date, "date")}</span>
      </div>
      <div className="flex-auto">
        <div className="flex gap-3">
          <span>Name :</span>
          <span>{todo.todo}</span>
        </div>
        <div className="flex gap-3">
          {todo.done ? (<>Done</>) : (<>Not Done</>)}
        </div>
      </div>
      <div className="w-max flex flex-col relative">
        <Button variant="outlined" onClick={() => setHasAction(!hasAction)}>Action</Button>
        <div className={(hasAction ? "flex flex-col w-max absolute top-10 right-0" : "hidden")}>
            <Button
            color={todo.done ? "error" : "success"}
            variant="contained"
            onClick={() => doneTodo(index)}
            >
            {todo.done ? "Mark not done" : "Mark has done"}
            </Button>
            <Button
            color="error"
            variant="contained"
            onClick={() => deleteTodo(index)}
            >
            Delete
            </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
