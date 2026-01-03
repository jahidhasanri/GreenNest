import React from 'react';
import Banner from './components/Banner';
import AbouOurService from './components/AbouOurService';
import CheckOutOurCategories from './components/CheckOutOurCategories';

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <AbouOurService></AbouOurService>
      <CheckOutOurCategories></CheckOutOurCategories>
    </div>
  );
};

export default Homepage;