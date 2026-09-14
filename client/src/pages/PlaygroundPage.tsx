import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Field,
  // FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRightIcon,
  Check,
  Folder,
  FolderPlus,
  Trash,
} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const PlaygroundPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const resetTodo = () => {
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col gap-10">
      {/* TO DO LIST */}

      {/* Add Todo */}
      <div className="flex flex-col gap-5">
        <h1>Todo List</h1>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-todo">Write something</FieldLabel>
            <Input
              id="fieldgroup-todo"
              type="text"
              placeholder="What needs to be done?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
            />
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" variant="outline" onClick={resetTodo}>
              Reset
            </Button>
            <Button type="submit" onClick={addTodo}>
              Submit
            </Button>
          </Field>
        </FieldGroup>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <Card>
            <CardHeader
              key={todo.id}
              className="flex flex-row items-center justify-between"
            >
              <CardTitle>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
              </CardTitle>
              <div className="flex items-center gap-2">
                {/* <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              ></Checkbox> */}

                <Button variant="default" onClick={() => toggleTodo(todo.id)}>
                  <Check />
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Trash />
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}

        {/* Empty State */}
        {todos.length === 0 && (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Folder />
              </EmptyMedia>
              <EmptyTitle>No Posts Yet</EmptyTitle>
              <EmptyDescription>
                You haven&apos;t created any posts yet. Get started by creating
                your first project.
              </EmptyDescription>
            </EmptyHeader>
            {/* <EmptyContent className="flex-row justify-center gap-2">
            <Button>Create Project</Button>
            <Button variant="outline">Import Project</Button>
          </EmptyContent> */}
          </Empty>
        )}
      </div>
    </div>
  );
};

export default PlaygroundPage;
