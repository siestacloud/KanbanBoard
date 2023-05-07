import { IIssue } from "../../../models/stateApp";
import { useAppState } from "../../../hooks/appHook";
import { Link } from 'react-router-dom';

// Issue окно редактирования отдельной issue
export function Issue({ description, id, name }: IIssue) {

  let { SetIssueDescription } = useAppState() //* добавление описания к issue в state приложения

  return (
    <article className="issue">
      <div className="issue__head">
        <p className="issue__title">{name}</p>
        <Link to={`/`}><p className="issue__title">X</p></Link>
      </div>
      <textarea
        value={description}
        onChange={event => SetIssueDescription(id, event.target.value)} //* каждый ввод пользователя сохраняется в state приложения
        className="issue__desc"
        placeholder={description ? description : "This task has no description"} />
    </article>
  );
}


