import "bootstrap-icons/font/bootstrap-icons.css";
export const Button = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        <i className="bi bi-pencil-fill"></i>
      </button>
      <button type="button" className="btn btn-danger mx-2">
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};
