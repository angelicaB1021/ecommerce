import NextLink from 'next/link';
import { useState } from 'react';
import { AppBar, Badge, Box, Button, Drawer, IconButton, Link, List, ListItem, ListItemText, Toolbar, Typography} from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined, MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <NextLink href='/' passHref legacyBehavior>
            <Link display='flex' alignItems='center'>
              <Typography variant='h6'>Ecommerce |</Typography>
              <Typography sx={{ ml: 0.5 }}>Shop</Typography>
            </Link>
          </NextLink>
          <Box flex={1} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NextLink href='/category/mouse' passHref legacyBehavior>
              <Link>
                <Button>Hombre</Button>
              </Link>
            </NextLink>
            <NextLink href='/category/streaming' passHref legacyBehavior>
              <Link>
                <Button>Mujer</Button>
              </Link>
            </NextLink>
            <NextLink href='/category/keyboard' passHref legacyBehavior>
              <Link>
                <Button>Unisex</Button>
              </Link>
            </NextLink>
          </Box>
          <Box flex={1} />
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <NextLink href='/cart' passHref legacyBehavior>
            <Link>
              <IconButton>
                <Badge badgeContent={5} color='secondary'>
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Link>
          </NextLink>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <NextLink href='/category/mouse' passHref legacyBehavior>
              <Link>
                <ListItem button>
                  <ListItemText primary='Hombre' />
                </ListItem>
              </Link>
            </NextLink>
            <NextLink href='/category/streaming' passHref legacyBehavior>
              <Link>
                <ListItem button>
                  <ListItemText primary='Mujer' />
                </ListItem>
              </Link>
            </NextLink>
            <NextLink href='/category/keyboard' passHref legacyBehavior>
              <Link>
                <ListItem button>
                  <ListItemText primary='Unisex' />
                </ListItem>
              </Link>
            </NextLink>
          </List>
          </Box>
      </Drawer>
    </>
  );
};