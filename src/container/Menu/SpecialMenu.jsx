import React from 'react';
import { SubHeading, MenuItem } from '../../components';
// import { images, data } from '../../constants/images';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title='Menu That Fits Your Palatte' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className="app__specialMenu-menu_items"></div>
        </div>
    </div>
  </div>
);

export default SpecialMenu;