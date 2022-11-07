import React from "react";
import classNames from "classnames/bind";
import styles from "./Key.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../interface/interface";
import { setBoard, increasePosition } from "../../redux/boardSlice";

const cx = classNames.bind(styles);

interface Iprops {
  letter: string;
}

const Key: React.FC<Iprops> = ({ letter }) => {
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.position);
  const rowInStore = useSelector((state: rootState) => state.board.row);
  const currentRow = Math.floor(position / 5);

  const inGame = useSelector((state: rootState) => state.board.inGame);

  const dispatch = useDispatch();

  const chooseLetter = () => {
    if (!inGame) return;
    if (position >= 30) return;
    if (currentRow > rowInStore) return;

    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increasePosition());
  };

  return (
    <div className={cx("key")} onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
