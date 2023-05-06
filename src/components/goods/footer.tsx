import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className='footer__state'>
          <p>Active tasks:</p>
          <p>Finished tasks:</p>
        </div>
        <div className='footer__by'>
          <p>Kanban board by Siesta, 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
