import { useState } from "react";
import { IBoard, IIssue } from "../../../models/stateApp";
import { useAppState } from "../../../hooks/appHook";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export function Issue({ description, id, name }: IIssue) {

  // const [newIssueDesc, setNewIssueDesc] = useState(""); //* захват данных с поля ввода

  let { SetIssueDescription } = useAppState() //* добавление новых issue в state приложения



  return (
    <article className="issue">
      <div className="issue__head">
        <p className="issue__title">{name}</p>
        <Link to={`/`}><p className="issue__title">X</p></Link>
      </div>
      <textarea
        value={description}
        onChange={event => SetIssueDescription(id, event.target.value)}
        className="issue__desc"
        placeholder={description ? description : "This task has no description"} />
    </article>
  );
}


