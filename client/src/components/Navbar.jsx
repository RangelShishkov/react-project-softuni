import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import CabinIcon from '@mui/icons-material/Cabin';

export const Navbar = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge="start" color='inherit' aria-label='logo'>
                    <CabinIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Campfire
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>My</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
