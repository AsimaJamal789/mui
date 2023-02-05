import { PeopleAlt,AccountBox,Storefront,Group,Home, ModeNight, Pages, Settings } from '@mui/icons-material'
// import HomeIcon from '@mui/icons-material/Home';
import { Box, List, ListItem,ListItemButton,ListItemIcon,ListItemText, Switch} from '@mui/material'
import React from 'react'

const SideBar = ({mode,setmode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>
          
          
          
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PeopleAlt/>
              </ListItemIcon>
              <ListItemText primary="Friends"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>

            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={(e)=>setmode(mode=== "light" ?  "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          
        </List>
      </Box>
    </Box>
  )
}

export default SideBar
