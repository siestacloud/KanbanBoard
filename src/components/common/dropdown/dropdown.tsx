import React from 'react';

import user from './assets/user-avatar.svg';
import arrow from './assets/arrow.svg';



function DropDownMenu() {

  const [MenuState, setMenuState] = React.useState(false)
  const HandleEnableMenu = () => {
    setMenuState(!MenuState)
  }


  return (
    //  2. Подсказкa слева 
    <div className="dropdown">
      <div className="dropdown__link" onClick={HandleEnableMenu} data-test="">
        <img className='dropdown__avatar' src={user} alt="" />
        <img className={`dropdown__arrow ${MenuState ? 'dropdown__arrow--active' : ''}`} src={arrow} alt="" />
      </div>
      <div className={`dropdown__sublinks ${MenuState ? 'dropdown__sublinks--active' : ''}`}>
        <span className="dropdown__sublinks-item">Profile</span>
        <span className="dropdown__sublinks-item">Log out</span>
      </div>
    </div>

  );
}

export default DropDownMenu;
