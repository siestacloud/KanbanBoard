import { useState } from "react";
import { IBoard, IIssue } from "../../../models/stateApp";
import { useAppState } from "../../../hooks/appHook";
import { v4 as uuidv4 } from 'uuid';


export function Input({ title, show }: IBoard) {
  
  const [newIssueTitle, setNewIssueTitle] = useState(""); //* захват данных с поля ввода
  let { InputShow, HandleAddIssue } = useAppState() //* добавление новых issue в state приложения

  const handleAddNewIssue = () => {
    if (newIssueTitle === "") { return }
    let issue: IIssue = {
      id: uuidv4(),
      name: newIssueTitle,
      description: ""
    }

    setNewIssueTitle("")
    HandleAddIssue(title, issue)
  };

  const handleInputShow = () => {
    InputShow(title);
  };


  return (
    <>
      <div className={`input__wrapper ${show ? 'input__wrapper--active' : ''}`}>
        <input
          value={newIssueTitle}
          onChange={event => setNewIssueTitle(event.target.value)}
          type="text"
          maxLength={30}
          className="input__text"
          placeholder='create new task...' required />
          
      </div>

      <p className={`input__show ${show ? 'input__show-hidden' : ''}`} onClick={handleInputShow}>+ Add task</p>
      <p className={`input__add  ${show ? 'input__add-active' : ''}`} onClick={handleAddNewIssue}>Submit</p>
    </>
  );
}


