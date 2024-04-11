import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg"
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3} from 'react-icons/hi2';
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import infoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false) //La variable de abrir menú se inicializa como falsa
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<infoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        }
    ]
  return (
    <nav>
        
        <div className="nav-logo-container">
            <h1 className='logoH1'>Food Rich</h1>
        </div>
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonial</a>
            <a href="">Contact</a>
            <a href=""><BsCart2 className="navbar-cart-icon"/></a>
            <button className="primary-button">Booking Now</button>
        </div>
        <div className="navbar-menu-container"><HiOutlineBars3 onclick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
            <Box sx={{ 
                width: 250 }}
                role="presentation"
                onClick={()=> setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
                >
                    <list>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </list>
                
            </Box>
        </Drawer>

    </nav>
  );
};

export default Navbar