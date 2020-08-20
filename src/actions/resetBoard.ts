export interface ResetBoardAction {
  type: "RESET_BOARD";
  payload: {};
}

export const ResetBoardActionType = "RESET_BOARD";

export function resetBoard(): ResetBoardAction {
  return {
    type: ResetBoardActionType,
    payload: {},
  };
}
