import React from 'react';
import { useAppState } from '../../hooks/appHook';

function Footer() {
  const { AppState } = useAppState() //* добавление новых issue в state приложения

  const ActiveIssuesSum = ():number => {
    let sum: number = 0
    AppState.Boards.map((board, i) => {

      if (board.title != "Finished") {
        sum += board.issues.length
      }
    }
    )
    return sum
  }

  return (
    <footer className="footer">
      <div className="footer__row">
        <div className='footer__state'>
          <p>Active tasks: {ActiveIssuesSum()}</p>
          <p>Finished tasks: {AppState.Boards[3].issues.length}</p>
        </div>
        <div className='footer__by'>
          <p>Kanban board by Siesta, 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
