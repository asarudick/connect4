import { Color } from "../types";

export interface DropCoinAction {
  type: "DROP_COIN";
  payload: {
    column: number;
    color: Color;
  };
}

export const DropCoinActionType = "DROP_COIN";

export function dropCoin(column: number, color: Color): DropCoinAction {
  return {
    type: DropCoinActionType,
    payload: { column, color }
  };
}
