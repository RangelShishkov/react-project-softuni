import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './Navbar.module.css';
import FireplaceIcon from '@mui/icons-material/Fireplace';




export const Navbar = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <CssBaseline />
                <Link to='/' className={styles['custom-link']}><IconButton size='large' disableRipple edge="start" color='inherit' aria-label='logo'>
                    <FireplaceIcon />
                </IconButton></Link>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    <Link to='/' className={styles['custom-link']}>Campfire</Link>
                </Typography>
                <Stack direction='row' spacing={2} >
                    <Link to='/' className={styles['custom-link']}><Button color='inherit'>All posts</Button></Link>
                    <Link to='/post-create' className={styles['custom-link']}><Button color='inherit'>Create post</Button></Link>
                    <Link to='/my-posts' className={styles['custom-link']}><Button color='inherit'>My posts</Button></Link>
                    <Link to='/login' className={styles['custom-link']}><Button color='inherit'>Login</Button></Link>
                    <Link to='/register' className={styles['custom-link']}><Button color='inherit'>Register</Button></Link>
                    <Link to='/logout' className={styles['custom-link']}><Button color='inherit'>Logout</Button></Link>                  
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
