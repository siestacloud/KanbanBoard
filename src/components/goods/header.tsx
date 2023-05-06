import React from 'react';
import DropDownMenu from '../common/dropdown/dropdown';



function Header() {


  return (
    <header className="header">

      <div className='header__wrapper'>
        <a href="/" className='header__logo'>Awesome Kanban Board</a>

        <DropDownMenu></DropDownMenu>

      </div>


    </header>
  );
}




export default Header;
