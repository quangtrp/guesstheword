import classNames from "classnames/bind";
import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Square from "../Square/Square";

import styles from "./Board.module.scss";

const cx = classNames.bind(styles);

interface Iprops {
  board: string[];
}

const Board: React.FC<Iprops> = ({ board }) => {
  return (
    <>
      <div className={cx("board")}>
        {board.map((square, idx) => {
          return <Square val={square} squareidx={idx} key={idx} />;
        })}
      </div>

      <div className={cx("keyboard")}>
        <Keyboard />
      </div>
    </>
  );
};

export default Board;
