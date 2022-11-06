import React from "react";
import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classNames.bind(styles);

interface Iprop {
  text: string;
}

const Heading: React.FC<Iprop> = ({ text }) => {
  return <h1 className={cx("heading")}>{text}</h1>;
};

export default Heading;
