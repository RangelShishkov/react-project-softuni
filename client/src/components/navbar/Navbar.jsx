import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import FireplaceIcon from '@mui/icons-material/Fireplace';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <Link to='/' className={styles['custom-link']}><IconButton size='large' edge="start" color='inherit' aria-label='logo'>
                    <FireplaceIcon />
                </IconButton></Link>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    <Link to='/' className={styles['custom-link']}><Button color='inherit'>Campfire</Button></Link>
                </Typography>
                <Stack direction='row' spacing={2} >
                    <Button color='inherit'>Create post</Button>
                    <Link to='/' className={styles['custom-link']}><Button color='inherit'>All posts</Button></Link>
                    <Link to='/about' className={styles['custom-link']}><Button color='inherit'>About</Button></Link>
                    <Link to='/login' className={styles['custom-link']}><Button color='inherit'>Login</Button></Link>
                    <Link to='/register' className={styles['custom-link']}><Button color='inherit'>Register</Button></Link>
                    <Link to='/logout' className={styles['custom-link']}><Button color='inherit'>Logout</Button></Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
