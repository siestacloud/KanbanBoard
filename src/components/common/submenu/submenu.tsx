import { IBoard, IIssue } from "../../../models/stateApp";
import { useAppState } from "../../../hooks/appHook";


interface props {
  title: string
  show: boolean
  issues: IIssue[]
  btnCheck: boolean
}

export function Submenu({ title, show, issues, btnCheck }: props) {

  let { AppState, InputShow, MoveIssue } = useAppState() //* добавление новых issue в state приложения


  const handleMoveIssue = (issue: IIssue) => {
    MoveIssue(title, issue)
  };

  const handleInputShow = () => {
    InputShow(title);
  };

  return (
    <div className="submenu">
      <p className={`submenu__choose ${show ? 'submenu__choose--active' : ''}`}>add issue from Backlog...</p>
      <div className={`submenu__wrapper ${show ? 'submenu__wrapper--active' : ''}`}>
        <ul className='submenu__items'>
          {issues.map((issue, i) => <li key={i} className="submenu__item" onClick={() => handleMoveIssue(issue)}>{issue.name} </li>)}
        </ul>
      </div>
      <p className={`submenu__show ${show ? 'submenu__show--hidden' : ''} ${btnCheck ? 'submenu__show--active':''}`} onClick={handleInputShow}>+ Add task</p>
    </div>
  );
}


