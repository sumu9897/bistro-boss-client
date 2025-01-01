import MenuItem from '../../shared/MenuItem/MenuItem'

const MenuCategory = ({items}) => {
  return (
    <div>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                items.map(item => <MenuItem
                    key={item._id}
                    item={item}>
                
                </MenuItem>)
            }
        </div>
      
    </div>
  )
}

export default MenuCategory
