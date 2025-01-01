import { Helmet } from 'react-helmet-async'
import Cover from '../../shared/Cover/Cover'
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'

const Menu = () => {
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our Menu"}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={menuImg} title={"our Menu"}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={menuImg} title={"our Menu"}></Cover>
        <PopularMenu></PopularMenu>
      Menu Page
    </div>
  )
}

export default Menu
