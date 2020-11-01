import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/weekSlice";

import ToDo from "./ToDo";

export default () => {
  const toDos = useSelector((state) => state.weekReducer);
  console.log(toDos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  }
  return (
    <main class="main">
      <div class="week__container">
        <div class="goal">
          <div class="goal__title">
            <h1>This Week's Goal</h1>
          </div>
          <div class="goal__content">
            <form class="goal__content--form" onSubmit={onSubmit}>
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  color: "0984e3",
                  fontSize: "2.4rem",
                  position: "absolute",
                  left: "1rem",
                }}
              />
              <input
                class="goal__content--form--input"
                placeholder="Add new goal"
                type="text"
                value={text}
                onChange={onChange}
              />
              <button class="goal__content--form--btn">Add</button>
            </form>

            <ul class="goal__content--ul">
              {toDos.map((toDo) => (
                <ToDo {...toDo} key={toDo.id} />
              ))}
            </ul>
          </div>
        </div>
        <div class="pray">
          <h1>Prayer request for this week</h1>
        </div>
      </div>
      <div class="today__container">
        <div class="goal">
          <h1>Today's Goal</h1>
        </div>
        <div class="todo">
          <h1>ToDo</h1>
        </div>
      </div>
    </main>
  );
};
