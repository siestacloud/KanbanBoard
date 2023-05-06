import { useState } from 'react';
// import { v4 } from "uuid";
import { IBoard, IIssue } from "../../../models/stateApp";
import { useAppState } from '../../../hooks/appHook';
import { Input } from '../inp/inp';
import { Submenu } from '../submenu/submenu';
import { Link } from 'react-router-dom';


export function Board(board: IBoard) {

  let { AppState } = useAppState() //* добавление новых issue в state приложения


  return (
    <article className="board">
      <div className="board__body">
        <h3 className="board__title">{board.title}</h3>

        <ul className="board__list">

          {board.issues.map((issue, i) => <Link className="board__list-task" key={i} to={`/issue/${issue.id}`}><li  >{issue.name}</li></Link>)}
        </ul>

        {board.title === "Backlog" ? <Input {...board} ></Input> : <></>}
        {board.title === "Ready" ? <Submenu btnCheck={AppState.Boards[0].issues.length === 0 ? false : true} title={board.title} issues={AppState.Boards[0].issues} show={board.show}></Submenu> : <></>}
        {board.title === "In Progress" ? <Submenu btnCheck={AppState.Boards[1].issues.length === 0 ? false : true} title={board.title} issues={AppState.Boards[1].issues} show={board.show}></Submenu> : <></>}
        {board.title === "Finished" ? <Submenu btnCheck={AppState.Boards[2].issues.length === 0 ? false : true} title={board.title} issues={AppState.Boards[2].issues} show={board.show}></Submenu> : <></>}

      </div>
    </article>
  );
}

