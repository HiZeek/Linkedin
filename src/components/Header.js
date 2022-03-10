import '../styles/Header.css';
import HeaderOptions from './HeaderOptions';

// IMAGES
import LinkedinLogo from '../img/linkedin.png';
import Profile from '../img/Profile.jfif'

// ICONS
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <img src={LinkedinLogo} alt="" className='img' />
            <div className="header-search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header-right">
            <HeaderOptions Icon={HomeIcon} title='Home' />
            <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOptions Icon={ChatIcon} title='Messaging' />
            <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
            <HeaderOptions avatar={Profile} title='Me' />
        </div>
    </div>
  )
}

export default Header;