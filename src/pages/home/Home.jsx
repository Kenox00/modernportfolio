import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './Hero/Hero'
import Banner from '../../components/banner/Banner'
import MyServices from './myservices/MyServices'
import LatestProject from './latestproject/LatestProject'
import MyResume from './myresume/MyResume'
import Testimonials from './testimonials/Testimonials'
import LatestBlog from './latestblog/LatestBlog'
import GetInTouch from './getintouch/GetInTouch'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Banner/>
    <MyServices/>
    <LatestProject/>
    <MyResume/>
    <Testimonials/>
    <LatestBlog/>
    <GetInTouch/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default Home