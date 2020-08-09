import React from 'react';
import MenuPage from 'components/Menu';

const HomePage = ({ auth }) => (
  <div>
    <MenuPage auth={{ auth }} />
  </div>
);

export default HomePage;
