import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Banner2 from '../Banner2/Banner2'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Banner2/>
      <PopularMenu/>
      <Featured/>
    </div>
  )
}

export default Home
