import React, { useState, useEffect } from "react";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default () => {
  const [clock, setClock] = React.useState(new Date());

  React.useEffect(() => {
    var timerID = setInterval(() => setClock(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <header class="header">
      <div class="title__container">
        <span class="title">Jinyoung's ToDo List</span>
      </div>
      <div class="date__container">
        <span class="date">
          {year}.{month < 10 ? `0${month}` : month}.{day < 10 ? `0${day}` : day}
        </span>
        <span class="clock">
          {clock.getHours() < 10 ? "0" + clock.getHours() : clock.getHours()}:
          {clock.getMinutes() < 10
            ? "0" + clock.getMinutes()
            : clock.getMinutes()}
          :
          {clock.getSeconds() < 10
            ? "0" + clock.getSeconds()
            : clock.getSeconds()}
        </span>
      </div>
    </header>
  );
};
