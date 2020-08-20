import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import { connect } from "react-redux";
import { getWinner } from "./reducers/selectors";
import { RootState } from "./reducers";
import { resetBoard } from "./actions/resetBoard";

interface Props {
  winner: ReturnType<typeof getWinner>;
  resetBoard: any;
}

const AppComponent: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <h1>Connect four</h1>
      <Board />
      <button
        onClick={props.resetBoard}
        className={"replay-button " + (props.winner ? "win" : "no-win")}
      >
        {props.winner ? "play again" : "start over"}
      </button>
    </div>
  );
};

const mapState = (state: RootState) => ({
  winner: getWinner(state),
});

export default connect(mapState, { resetBoard })(AppComponent);
