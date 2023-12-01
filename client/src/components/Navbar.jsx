import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import FireplaceIcon from '@mui/icons-material/Fireplace';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton href='/' size='large' edge="start" color='inherit' aria-label='logo'>
                    <FireplaceIcon />
                </IconButton>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    Campfire
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Create post</Button>
                    <Button color='inherit'>Logout</Button>
                    <Button color='inherit'>All posts</Button>
                    <Button href='/about' color='inherit' >About</Button>
                    <Button href='/login' color='inherit' >Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
