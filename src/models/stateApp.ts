

export interface AppState {
  Boards: IBoard[]
}
export interface IIssue {
  id: string,
  name: string,
  description: string,
}

export interface IBoard {
  title: string;
  issues: IIssue[];
}

export const DEF_APP_STATE: AppState = {
  Boards: [],
}
