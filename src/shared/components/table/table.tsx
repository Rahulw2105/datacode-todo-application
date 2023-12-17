import { TodoModel } from "../../interface/todo.interface";
import { Button } from "../button/button";
import { Checkbox } from "../checkbox/checkbox";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Table = (props: { todo: TodoModel[] }) => {
  return (
    <table className="table table-striped">
      {" "}
      <thead>
        <tr>
          <th scope="col">
            {" "}
            <Checkbox></Checkbox>
          </th>
          <th scope="col">Task Name</th>
          <th scope="col">Progress</th>
          <th scope="col">Dues Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.todo.map((todo: TodoModel, index: number) => (
          <tr>
            <th scope="row">
              {" "}
              <Checkbox></Checkbox>
            </th>
            <td>{todo.title}</td>
            <td>
              {" "}
              <ProgressBar
                completedPercentage={todo.completedPercantage}
              ></ProgressBar>
            </td>
            <td>{todo.dateDate}</td>

            <td>
              <Button></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
