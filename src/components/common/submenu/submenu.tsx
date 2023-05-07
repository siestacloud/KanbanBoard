import { IIssue } from "../../../models/stateApp";
import { useAppState } from "../../../hooks/appHook";

interface props {
  title: string //* заголовок board
  show: boolean //* отображение submenu
  issues: IIssue[] //* отображение issues зависимого board
  btnCheck: boolean //* активация кнопки + Add task если у зависимого board есть issues
}

export function Submenu({ title, show, issues, btnCheck }: props) {

  let { Show, MoveIssue } = useAppState() //* добавление новых issue в state приложения

  //* handleMoveIssue перенос issue между boards
  const handleMoveIssue = (issue: IIssue) => {
    MoveIssue(title, issue)
  };

  //* handleInputShow отображение submenu при клике на +Add task
  const handleSubmenuShow = () => {
    Show(title);
  };

  return (
    <div className="submenu">
      <p className={`submenu__choose ${show ? 'submenu__choose--active' : ''}`}>add issue from Backlog...</p>
      <div className={`submenu__wrapper ${show ? 'submenu__wrapper--active' : ''}`}>
        <ul className='submenu__items'>
          {issues.map((issue, i) => <li key={i} className="submenu__item" onClick={() => handleMoveIssue(issue)}>{issue.name} </li>)}
        </ul>
      </div>
      <p className={`submenu__show ${show ? 'submenu__show--hidden' : ''} ${btnCheck ? 'submenu__show--active' : ''}`} onClick={handleSubmenuShow}>+ Add task</p>
    </div>
  );
}


