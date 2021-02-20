import React from "react";
import "../css/Todos.css";
import insta from "../img/insta.svg";
import todo1 from "../img/todo-1.png";
import todo2 from "../img/todo-2.png";
import todo3 from "../img/todo-3.png";

function Todos() {
  return (
    <section id="todos">
      <h2 className="todos-title">My to do's (3)</h2>
      <div className="todos-container">
        <div className="todo">
          <div className="todo-header">
            <p className="pink">Ellaria Dorne</p> uploaded instagram contet for
            proof to your campign <b>'Nike Sneaker Campaign II'</b>
          </div>
          <div className="todo-body">
            <div className="post">
              <img src={todo1} alt="" />
              <div>
                <img src={insta} alt="" />
                <p>02.07.1016</p>
                <p className="todo-text">
                  Who sasy you can't be elegant in sneakers?! :){" "}
                  <p className="grey">
                    #nike #sneakers #morningoutfit #liveyourlife #fashion
                    #dailyfashion #fashionista{" "}
                  </p>
                </p>
              </div>
            </div>
            <hr />
            <div>
              <button>ACCEPT</button>
              <button>DECLINE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todos;
