import {Fragment} from "react";
function TodoCard({todo = []}) {
  const style = {
    color: "Orange",
    fontWeigth: 200,
    
  };
  return (
    <Fragment>
      {todo.map((x, i) => (
        <section
          onClick={() => alert(`todo dengan id ${x.id} telah di clicked`)}
          key={i}>
          <h2 style={style} className="todo-card">
            {x.title}
          </h2>
          <p>{x.completed ? "Completed" : "Not Completed"}</p>
        </section>
      ))}
    </Fragment>
  );
}

export default TodoCard