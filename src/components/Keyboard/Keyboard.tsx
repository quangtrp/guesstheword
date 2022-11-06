import React from "react";
import classNames from "classnames/bind";
import styles from "./Keyboard.module.scss";
import Key from "../Key/Key";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../interface/interface";
import {
  decreasePosition,
  increaseRow,
  setBoard,
} from "../../redux/boardSlice";

const cx = classNames.bind(styles);

const Keyboard: React.FC = () => {
  const rowBoard: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.position);
  const rowInStore = useSelector((state: rootState) => state.board.row);
  const backRow = Math.floor((position - 1) / 5);
  const dispatch = useDispatch();

  const backClick = () => {
    if (backRow < rowInStore) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decreasePosition());
  };

  const enterClick = () => {
    if (position % 5 === 0 && position !== 0) {
      dispatch(increaseRow());
    }
  };
  return (
    <div>
      {rowBoard.map((row, idx) => {
        return (
          <div key={idx} className={cx("all-rows")}>
            {idx === 2 && (
              <span className={cx("letter")} onClick={enterClick}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div key={letter} className={cx("letter")}>
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={backClick}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
