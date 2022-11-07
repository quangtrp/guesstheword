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
  setRow,
  setInGame,
} from "../../redux/boardSlice";
import wordList from "../../words.json";

const cx = classNames.bind(styles);

const Keyboard: React.FC = () => {
  const rowBoard: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  // Redux
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.position);
  const rowInStore = useSelector((state: rootState) => state.board.row);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );

  const backRow = Math.floor((position - 1) / 5);
  const dispatch = useDispatch();
  const allWords = wordList.words;

  const board5Words = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();

  const backClick = () => {
    if (backRow < rowInStore) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decreasePosition());
  };

  const enterClick = () => {
    if (!allWords.includes(board5Words)) {
      alert("Not In Word List");
    }

    if (allWords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
        if (rowInStore > backRow) {
          dispatch(setRow(backRow));
        }
        dispatch(increaseRow());

        if (board5Words === correctWord.toLowerCase()) {
          alert(
            `Congratulation!! You Guessed The Correct Word: ${correctWord}`
          );
          dispatch(setInGame(false));
        }
      }
    }

    if (position === 30 && board5Words !== correctWord.toLowerCase()) {
      alert(`The Correct Word Is ${correctWord}. Try Again`);
      dispatch(setInGame(false));
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
