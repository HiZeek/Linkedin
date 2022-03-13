import '../styles/HeaderOptions.css'
import { Avatar } from '@mui/material'

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption-icon' />}
        {avatar && <Avatar className='headerOption-icon' src={avatar} /> }
        <h3 className='headerOption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions