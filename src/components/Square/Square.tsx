import React from "react";
import classNames from "classnames/bind";
import styles from "./Square.module.scss";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

interface Iprops {
  val: string;
  squareidx: number;
}

const Square: React.FC<Iprops> = ({ val }) => {
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

  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className={cx("square")}>{val}</div>
    </motion.div>
  );
};

export default Square;
