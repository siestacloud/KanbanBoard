import { createContext, useState, useContext } from "react";

import { AppState as AS, DEF_APP_STATE, IIssue } from '../models/stateApp';
import { deserialize } from 'json-typescript-mapper';


export interface AppContext {
  AppState: AS;
  InputShow: (boardTitle: string) => void;
  HandleAddIssue: (boardTitle: string, issue: IIssue) => void;
  MoveIssue: (boardTitle: string, issue: IIssue) => void;
  SetIssueDescription: (issueID: string, desc: string) => void;

}

const AppStateContext = createContext<AppContext>(
  {
    AppState: DEF_APP_STATE,
    InputShow() { },
    HandleAddIssue(f) { },
    MoveIssue(f) { },
    SetIssueDescription(f) { },

  }
);

export const useAppState = () => useContext(AppStateContext);
type Props = { children: JSX.Element }

export const AppStateContextProvider = ({ children }: Props) => {
  let as: AS = JSON.parse(localStorage.getItem('APP_STATE') || '{}');
  // const person = deserialize(AS, json);
  console.log("as 1", as);

  if (Object.keys(as).length === 0) {
    as = DEF_APP_STATE
  }
  console.log("as 2 ", as);

  const [AppState, setAppCustomState] = useState(as)

  const InputShow = (boardTitle: string): void => {

    AppState.Boards.map((board, i) => {
      
      if (i >0 && AppState.Boards[i - 1].issues.length == 0) {  //* отмена события если в зависимой колонке отсутствуют issues
        return
      }
      board.title === boardTitle ? board.show = true : board.show = false
    })

    const NEW_APP_STATE = { ...AppState } as AS
    // console.log("HandleInputShow", NEW_APP_STATE.InputShow);
    setAppCustomState(NEW_APP_STATE);
  }


  //* HandleAddFindLocations обновление стейта приложения (доб новый issue)
  const HandleAddIssue = (boardTitle: string, issue: IIssue): void => {

    AppState.Boards.map((board, i) => {

      if (board.title === boardTitle) {
        board.show = false
        board.issues = [...board.issues, issue]
      }

    })
    // console.log(AppState);
    const NEW_APP_STATE = { ...AppState } as AS

    localStorage.setItem('APP_STATE', JSON.stringify(NEW_APP_STATE))
    setAppCustomState(NEW_APP_STATE);
  };


  //* HandleAddFindLocations обновление стейта приложения (перенос issue)
  const MoveIssue = (boardTitle: string, issue: IIssue): void => {

    AppState.Boards.map((board, i) => {
      board.show = false
      board.issues = board.issues.filter(is => is.id !== issue.id)
      console.log("Move...", board.issues);

      if (board.title === boardTitle) {
        board.issues = [...board.issues, issue]
      }

    })
    console.log("MoveIssue", AppState);
    const NEW_APP_STATE = { ...AppState } as AS

    localStorage.setItem('APP_STATE', JSON.stringify(NEW_APP_STATE))
    setAppCustomState(NEW_APP_STATE);
  };


  //* HandleAddFindLocations обновление стейта приложения (доб новый issue)
  const SetIssueDescription = (issueID: string, desc: string): void => {
    console.log("setIssueDescription", desc);

    AppState.Boards.map((board, i) => {

      board.issues = board.issues.map((issue, i) =>
        issue.id === issueID ? { ...issue, description: desc } : issue
      )

    })


    console.log("setIssueDescription ===> ", AppState);

    const NEW_APP_STATE = { ...AppState } as AS

    localStorage.setItem('APP_STATE', JSON.stringify(NEW_APP_STATE))
    setAppCustomState(NEW_APP_STATE);
  };

  return (
    <AppStateContext.Provider value={{ AppState, InputShow, HandleAddIssue, MoveIssue, SetIssueDescription }} >
      {children}
    </AppStateContext.Provider>
  )
}