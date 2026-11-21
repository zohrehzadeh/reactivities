import { Box, AppBar, Toolbar, Typography, Container, MenuItem, MenuList } from '@mui/material';
import Group from '@mui/icons-material/Group';
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/components/MenuItemLink';


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
                }}
            >

                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <MenuList>
                                <MenuItem component={NavLink}
                                    to="/">
                                    <Group fontSize="large" />
                                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                                        Reactivities
                                    </Typography>
                                </MenuItem>
                            </MenuList>

                        </Box>
                        <MenuList sx={{ display: 'flex' }}>
                            <MenuItemLink
                                to="/activities"
                            >
                                Activities
                            </MenuItemLink>
                            <MenuItemLink
                                to="/createActivity"
                            >
                                Create Activity
                            </MenuItemLink>
                        </MenuList>
                        <MenuList>
                            <MenuItemLink
                                to="/"
                            >
                                User Menu
                            </MenuItemLink>
                        </MenuList>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
