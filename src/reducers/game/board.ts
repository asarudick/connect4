import { Color } from "../../types";
import { Action } from "../../actions/types";
import { DropCoinActionType } from "../../actions/dropCoin";
import { ResetBoardActionType } from "../../actions/resetBoard";
import { dropCoin } from "./dropCoin";
import { getInitialBoard } from "./getInitialBoard";

export type BoardState = Color[][];

const initialState: BoardState = getInitialBoard();

const actions = {
  [DropCoinActionType]: (state: any, payload: any) => {
    const { column, color } = payload;
    return dropCoin(state, column, color);
  },
  [ResetBoardActionType]: () => initialState
};

export const reducer = (
  state: BoardState = initialState,
  action: Action
): BoardState => {
  const selectedAction = actions[action.type];
  return selectedAction && selectedAction(state, action.payload) || state;
};
