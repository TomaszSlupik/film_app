import React from 'react'
import './Navbar.scss'
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

    const [state, setState] = React.useState({
        top: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const style = {
        list: {textDecoration: 'none', color: '#3b2774', textTransform: 'uppercase'}, 
        menu: {position: 'absolute', top: '2%', right: '2%', color: '#fff', cursor: 'pointer', fontSize: '3rem'}
      }
        
        const link = [
            {
                linknav: 'Home',
                href: '/'
            }, 
          {
            linknav: 'Rejestracja',
            href: '/register'
          }, 
          {
            linknav: 'Logowanie', 
            href: '/login'
          }, 
         
      
        ]
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List >
            {link.map((el, index) => (
              <ListItem key={index} disablePadding >
                <Link to={el.href} style={style.list}>
                <ListItemButton>
                  <ListItemText primary={el.linknav} />
                </ListItemButton>
                </Link>
              </ListItem>
            ))}
           </List>
        </Box>
      );
    

  return (
    <div>
        <header className='header'>
        <div>
            {(['top']).map((anchor, index) => (
            <React.Fragment key={index}>
            <MenuIcon 
            style={style.menu}
            onClick={toggleDrawer(anchor, true)}
            />
              <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
          </div>
        </header>
    </div>
  )
}
