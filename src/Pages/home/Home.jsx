import React from 'react';
import {
  Featured,
  FeaturedProperties,
  Hero,
  Mail,
  PropertyList,
} from '../../components';

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <PropertyList />
      <FeaturedProperties />
      <Mail />
    </>
  );
}

export default Home;
