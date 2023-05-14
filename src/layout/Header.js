import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       User Authentication Assignment
                    </Typography>
                    {isMobile && !menuOpen ? (
                        <IconButton color="inherit" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex' }}>
                            <Button color="inherit" sx={{ mr: 1 }} component={RouterLink} to="/">
                                Sign Up
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/login">
                                Login
                            </Button>
                        </Box>
                    )}
                </Toolbar>
                {isMobile && menuOpen && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            left: 0,
                            backgroundColor: theme.palette.background.paper,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: theme.spacing(2),
                        }}
                    >
                        <Button
                            color="inherit"
                            sx={{ mb: 1 }}
                            component={RouterLink}
                            to="/"
                            onClick={handleMenuClose}
                        >
                            Sign Up
                        </Button>
                        <Button
                            color="inherit"
                            component={RouterLink}
                            to="/login"
                            onClick={handleMenuClose}
                        >
                            Login
                        </Button>
                    </Box>
                )}
            </AppBar>
        </Box>
    );
}
