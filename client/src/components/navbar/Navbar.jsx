import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import FireplaceIcon from '@mui/icons-material/Fireplace';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <Link to='/'><IconButton size='large' edge="start" color='inherit' aria-label='logo'>
                    <FireplaceIcon />
                </IconButton></Link>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    <Link to='/'><Button color='inherit'>Campfire</Button></Link>
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Create post</Button>
                    <Button color='inherit'>Logout</Button>
                    <Button color='inherit'>All posts</Button>
                    <Link to='/about' className={styles['custom-link']}><Button color='inherit' >About</Button></Link>
                    <Button href='/login' color='inherit' >Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
