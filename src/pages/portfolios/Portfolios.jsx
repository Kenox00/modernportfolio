import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import PortfolioGrid from './PortfolioGrid';

const Portfolios = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Latest Projects</h1>
          <PortfolioGrid />
        </div>
      </div>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Portfolios;