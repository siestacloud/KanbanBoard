import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAppState } from "../../../hooks/appHook";
import { IBoard, IIssue } from "../../../models/stateApp";

// Input компонет отображает поле вода у Backlog board
export function Input({ title, show }: IBoard) {
  
  const [newIssueTitle, setNewIssueTitle] = useState(""); //* захват данных с поля ввода
  let { Show, HandleAddIssue } = useAppState() //* добавление новых issue в state приложения

  //* handleAddNewIssue добавление нового issue в state приложения
  //* если поле ввода пустое, state приложения не изменяется, рендер не запускается
  //* срабатывает при клике на Submit
  const handleAddNewIssue = () => {
    if (newIssueTitle === "") { return }
    let issue: IIssue = {
      id: uuidv4(), //* уникальный id issue 
      name: newIssueTitle,
      description: ""
    }
    setNewIssueTitle("")
    HandleAddIssue(title, issue)
  };

  //* handleInputShow изменение свойства show в state приложения для отображения поля ввода, 
  //* после нажатия кнопки +Add task
  const handleInputShow = () => {
    Show(title);
  };


  return (
    <>
      <div className={`input__wrapper ${show ? 'input__wrapper--active' : ''}`}>
        <input
          autoFocus={true}
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


