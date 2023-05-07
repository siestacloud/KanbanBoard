import { createContext, useState, useContext } from "react";
import { AppState as AS, DEF_APP_STATE, IIssue } from '../models/stateApp';


export interface AppContext {
  AppState: AS; //* state приложения, содержит данные о boards, issues
  Show: (boardTitle: string) => void; //* ругулировка отображения поля ввода или submenu в зависимости от board title 
  HandleAddIssue: (boardTitle: string, issue: IIssue) => void; //* добавить новый issue
  MoveIssue: (boardTitle: string, issue: IIssue) => void; //* перенос issue между boards
  SetIssueDescription: (issueID: string, desc: string) => void; //* добавление описания к issue по id
}

const AppStateContext = createContext<AppContext>(
  {
    AppState: DEF_APP_STATE,
    Show() { },
    HandleAddIssue(f) { },
    MoveIssue(f) { },
    SetIssueDescription(f) { },
  }
);

export const useAppState = () => useContext(AppStateContext);
type Props = { children: JSX.Element }

export const AppStateContextProvider = ({ children }: Props) => {
  
  let as: AS = JSON.parse(localStorage.getItem('APP_STATE') || '{}');
  if (Object.keys(as).length === 0) {
    as = DEF_APP_STATE
  }

  const [AppState, setAppCustomState] = useState(as) 
  
  
  const Show = (boardTitle: string): void => {
    AppState.Boards.map((board, i) => {
      if (i > 0 && AppState.Boards[i - 1].issues.length === 0) {  //* отмена события если в зависимой колонке отсутствуют issues
        return
      }
      board.title === boardTitle ? board.show = true : board.show = false
    })
    const NEW_APP_STATE = { ...AppState } as AS
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
    const NEW_APP_STATE = { ...AppState } as AS

    localStorage.setItem('APP_STATE', JSON.stringify(NEW_APP_STATE))
    setAppCustomState(NEW_APP_STATE);
  };


  //* HandleAddFindLocations обновление стейта приложения (перенос issue)
  const MoveIssue = (boardTitle: string, issue: IIssue): void => {

    AppState.Boards.map((board, i) => {
      board.show = false
      board.issues = board.issues.filter(is => is.id !== issue.id)

      if (board.title === boardTitle) {
        board.issues = [...board.issues, issue]
      }

    })
    const NEW_APP_STATE = { ...AppState } as AS

    localStorage.setItem('APP_STATE', JSON.stringify(NEW_APP_STATE))
    setAppCustomState(NEW_APP_STATE);
  };


  //* HandleAddFindLocations обновление стейта приложения (добавление описания к issue по id)
  const SetIssueDescription = (issueID: string, desc: string): void => {
    AppState.Boards.map((board, i) => {
      board.issues = board.issues.map((issue, i) =>
        issue.id === issueID ? { ...issue, description: desc } : issue
      )
    })
    const NEW_APP_STATE = { ...AppState } as AS
    localStorage.setItem('APP_STATE', JSON.stringify(NEW_APP_STATE))
    setAppCustomState(NEW_APP_STATE);
  };

  return (
    <AppStateContext.Provider value={{ AppState, Show, HandleAddIssue, MoveIssue, SetIssueDescription }} >
      {children}
    </AppStateContext.Provider>
  )
}