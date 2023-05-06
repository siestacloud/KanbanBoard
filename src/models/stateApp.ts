

export interface AppState {
  Boards: IBoard[]
}
export interface IIssue {
  id: string,
  name: string,
  description: string,
}

export interface IBoard {
  show: boolean,
  title: string;
  issues: IIssue[];
}




export const DEF_APP_STATE: AppState = {
  Boards: [
    {
      show: false,
      title: "Backlog",
      issues: [

      ]
    },
    {
      show: false,

      title: "Ready",
      issues: [
 
      ]
    },
    {
      show: false,

      title: "In Progress",
      issues: [
   
      ]
    },
    {
      show: false,
      title: "Finished",
      issues: [
  
      ]
    }
  ],
}
