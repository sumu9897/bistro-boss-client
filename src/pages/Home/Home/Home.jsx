import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Banner2 from '../Banner2/Banner2'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner/>
      <Category/>
      <Banner2/>
      <PopularMenu/>
      <Featured/>
      <Testimonials/>
    </div>
  )
}

export default Home
