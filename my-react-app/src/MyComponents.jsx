import React from 'react';
import ironhackLogo from './assets/ironhack-logo-xs.png';
import menuIcon from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function MyComponent() {
  return (
    <div>
      <img src={ironhackLogo} alt="Ironhack Logo" />
      <img src={menuIcon} alt="Menu Icon" />
      <img src={icon1} alt="Icon 1" />
      <img src={icon2} alt="Icon 2" />
      <img src={icon3} alt="Icon 3" />
      <img src={icon4} alt="Icon 4" />
    </div>
  );
}

export default MyComponent;
