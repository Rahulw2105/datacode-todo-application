import React from "react";
import "./App.css";

/* boostrap imports */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Table } from "./shared/components/table/table";
import { Button } from "./shared/components/button/button";
import { ProgressBar } from "./shared/components/progress-bar/progress-bar";
import { TodoModel } from "./shared/interface/todo.interface";
import { Todo } from "./shared/data/todo-data";

function App() {
  const todo: TodoModel[] = Todo;
  return (
    <div className="App">
      <div className="heading-section">Welcome To Todo Application</div>
      <div className="table-section">
        <Table todo={todo}></Table>
      </div>
    </div>
  );
}

export default App;
