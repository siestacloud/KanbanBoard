import { Routes, Route } from 'react-router-dom';
import { Board } from '../common/board/board';
import { Issue } from '../common/issue/issue';
import { useAppState } from '../../hooks/appHook';

function Main() {
  let { AppState } = useAppState()

  return (
    <main className='main'>
      <div className='main__wrapper'>

        <Routes>
          <Route path="/*`" element={
            AppState.Boards.map((board, i) =>
              <Board
                key={i}
                {...board}
              />
            )
          } />

          {
            AppState.Boards.map((board, i) =>
              board.issues.map((issue, i) =>
                <Route path={`/issue/${issue.id}`} element={<Issue {...issue}></Issue>} />
              )
            )
          }

        </Routes>
      </div>

    </main>
  );
}

export default Main;
