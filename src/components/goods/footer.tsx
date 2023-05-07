import { useAppState } from '../../hooks/appHook';

function Footer() {
  const { AppState } = useAppState() 

  const ActiveIssuesSum = (): number => {
    let sum: number = 0
    for (let i = 0; i < AppState.Boards.length; i++) {
      if (AppState.Boards[i].title !== "Finished") {
        sum += AppState.Boards[i].issues.length
      }
    }
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
