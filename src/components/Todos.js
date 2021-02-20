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
      <div className="todos-body">
        <div className="todos-container">
          <div className="todo">
            <div className="todo-header">
              <p className="pink">Ellaria Dorne</p> uploaded instagram contet
              for proof to your campign <b>'Nike Sneaker Campaign II'</b>
            </div>
            <div className="todo-body">
              <div className="post">
                <img src={todo1} alt="" className="post-img" />
                <div className="post-content">
                  <div className="post-date">
                    <img src={insta} alt="" />
                    <p className="date-text grey">02.07.1016</p>
                  </div>
                  <div className="todo-text">
                    Who sasy you can't be elegant in sneakers?! :){" "}
                    <p className="grey">
                      #nike #sneakers #morningoutfit #liveyourlife #fashion
                      #dailyfashion #fashionista{" "}
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="btn-group">
                <button className="todo-btn">ACCEPT</button>
                <button className="todo-btn">DECLINE</button>
              </div>
            </div>
          </div>
          <div className="todo">
            <div className="todo-header">
              <p className="pink">Amy Champeon</p> just applied to your open
              campaign <b>'Tennis clothing for men'</b>
            </div>
            <div className="todo-body">
              <div className="post">
                <img src={todo2} alt="" className="post-img post-img-circle" />
                <div className="post-content post-content-center">
                  <p className="name-text">Amy Champeon</p>

                  <div className="todo-text-row">
                    <div className="todo-text-col">
                      <p className="followers-num pink">34 567</p>
                      <p className="grey followers">INSTAGRAM FOLLOWERS</p>
                    </div>
                    <div className="todo-text-col">
                      <p className="followers-num pink">3 567</p>
                      <p className="grey followers">SNAPCHAT FOLLOWERS</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="btn-group">
                <button className="todo-btn">ACCEPT</button>
                <button className="todo-btn">DECLINE</button>
              </div>
            </div>
          </div>
          <div className="todo">
            <div className="todo-header">
              <p className="pink">Mike Jones</p> published content to instagram
              for campign <b>'#DOUYOUYOGA'</b>
            </div>
            <div className="todo-body">
              <div className="post">
                <img src={todo3} alt="" className="post-img" />
                <div className="post-content">
                  <div className="post-date">
                    <img src={insta} alt="" />
                    <p className="date-text grey">02.07.1016</p>
                  </div>
                  <div className="todo-text">
                    My new yoga pants from Nike has arrived, I adore it!
                    <p className="grey">
                      #nike #yoga #sun #namaste #liveyourlife #fashion
                      #dailyfashion #sport #sporty #nature
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="btn-group">
                <button className="todo-btn">ACCEPT</button>
                <button className="todo-btn">DECLINE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-shadow"></div>
      </div>
    </section>
  );
}

export default Todos;
