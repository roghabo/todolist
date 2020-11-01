import React from "react";
import { connect } from "react-redux";
import { remove } from "../../redux/weekSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default ({ text, onBtnClick, id }) => {
  const dispatch = useDispatch();
  return (
    <li class="goal__content--ul--li">
      <FontAwesomeIcon
        icon={faAngleRight}
        style={{
          fontSize: "2.4rem",
          marginRight: 10,
        }}
      />
      {text}
      <button onClick={() => dispatch(remove(id))}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          style={{
            fontSize: "2rem",
          }}
        />
      </button>
    </li>
  );
};
