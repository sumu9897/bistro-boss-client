import { Helmet } from 'react-helmet-async'
import Cover from '../../shared/Cover/Cover'
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory'

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our Menu"}></Cover>
        <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offered"}></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
    </div>
  )
}

export default Menu
