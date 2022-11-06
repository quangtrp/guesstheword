import styles from "./App.module.scss";
import classNames from "classnames/bind";
import Heading from "./components/Heading/Heading";
import { useSelector } from "react-redux/es/exports";
import { rootState } from "./components/interface/interface";
import Board from "./components/Board/Board";

const cx = classNames.bind(styles);

function App() {
  const board = useSelector((state: rootState) => state.board.board);

  return (
    <div className={cx("app")}>
      <Heading text="Guess The Word" />
      <div className={cx("board__container")}>
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
