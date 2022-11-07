import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Square.module.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../interface/interface";

const cx = classNames.bind(styles);

interface Iprops {
  val: string;
  squareidx: number;
}

const Square: React.FC<Iprops> = ({ val, squareidx }) => {
  // Redux
  const position = useSelector((state: rootState) => state.board.position);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const rowInStore = useSelector((state: rootState) => state.board.row);

  // State
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  const currentPosition = (position - 1) % 5;

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };

  useEffect(() => {
    if (correctWord[currentPosition] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }

    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);

  const status: string | boolean =
    Math.floor(squareidx / 5) < rowInStore &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className={cx("square", status)}>{val}</div>
    </motion.div>
  );
};

export default Square;
