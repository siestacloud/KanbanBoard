import React, { createContext, useState, useContext } from "react";

import { AppState as AS, DEF_APP_STATE, IIssue } from '../models/stateApp';


export interface AppContext {
  AppCustomState: AS;
  HandleAddIssue: (issue: IIssue) => void;
}

const AppStateContext = createContext<AppContext>(
  {
    AppCustomState: DEF_APP_STATE,
    HandleAddIssue(f) { },
  });

export const useAppCustomState = () => { return useContext(AppStateContext) };
type Props = {
  children: JSX.Element
}

export const AppStateContextProvider = ({ children }: Props) => {

  const [AppCustomState, setAppCustomState] = useState(DEF_APP_STATE)

  //* HandleAddFindLocations обновление стейта приложения (доб новый issue)
  const HandleAddIssue = (issue: IIssue): void => {
    const NEW_APP_STATE = {} as AS
    setAppCustomState(NEW_APP_STATE);
  };


  return (
    <AppStateContext.Provider value={{ AppCustomState, HandleAddIssue }} >
      {children}
    </AppStateContext.Provider>
  )
}