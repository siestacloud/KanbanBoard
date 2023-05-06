import React from 'react';

export function Card() {


  return (

    <article className="card">
      <div className="card__body">
        <h3 className="card__title">Backlog</h3>
        <ul className="card__list">
          <li className="card__list-task">Login page - perfomance issues</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
          <li className="card__list-task">Sprint bugfix</li>
        </ul>
        <p className="card__add">+ Add task</p>
      </div>
    </article>
  );
}

