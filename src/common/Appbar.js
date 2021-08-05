import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    boxShadow: 'none',
    height: 70,
  },
  logo: {
    fontWeight: 600,
    color: theme.palette.market.textPrimary,
    fontSize: 20,
    letterSpacing: '-1px',
    paddingTop: 5,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    color: '#e65100',
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  tabs: {
    color: theme.palette.market.textPrimary,
    display: 'block',
    fontWeight: 500,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.7px',
    padding: '9px 25px 0px',
    cursor: 'pointer',
    fontSize: '1.2vw',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  inputRoot: {
    color: 'inherit',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    backgroundColor: 'transparent',
  },
  menuIcon: {
    color: '#e5e5e5',

    marginTop: 10,
  },
  list: {
    width: '250px',
    borderLeft: '5px solid pink',
    borderColor: theme.palette.pbr.primary,
    height: '100%',
    backgroundColor: 'transparent',
  },
  fullList: {
    width: 'auto',
  },
  menuTitle: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    textAlign: 'left',
    fontSize: 16,
  },
  menuTitlePink: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.pbr.primary,
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: 'none',
  },
  mobileButton: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    color: '#ffffff',
    padding: '5px 15px 5px 15px',
    fontWeight: 600,
  },
  buttonOutlined: {
    borderRadius: '10px',
    border: '1px solid #000000',
    background: '#ffffff',
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#000000',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    fontSize: '1.1vw',
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  normalButton: {
    color: '#f9f9f9',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '8px 16px 8px 16px',
    fontWeight: 500,
    background: `linear-gradient(to right,#3f51b5, #1a237e)`,
    border: '1px solid #bdbdbd',
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
  },
}));

export default function MarketAppbar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {[
          { name: 'About', id: 'about' },
          { name: 'Features', id: 'features' },
          // { name: 'Team', id: 'team' },
          { name: 'Roadmap', id: 'roadmap' },
          { name: 'Tokenomics', id: 'tokenomics' },
        ].map((tab, index) => (
          <Link activeClass="active" to={tab.id} smooth={true} offset={0} duration={500} delay={0}>
            <ListItem button key={tab.name} onClick={toggleDrawer(anchor, false)}>
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { name: 'To The Moon', id: 'https://t.me/corgipolkabridge' },

          {
            name: 'PancakeSwap',
            id: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55',
          },
          { name: 'Price Chart', id: 'https://poocoin.app/tokens/0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55' },
        ].map((tab, index) => (
          <a href={tab.id} className={classes.mobileLink}>
            <ListItem button key={tab.name}>
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </a>
        ))}
        <ListItem button>
          <a href="/bet" style={{ textDecoration: 'none' }}>
            <ListItemText primary={'Bet & Win'} className={classes.menuTitlePink} />
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.background}>
        <Toolbar className="d-flex justify-content-between ">
          <div className={classes.title}>
            <Link to="/">
              <div className="d-flex flex-row  justify-content-start align-items-center">
                <div style={{ paddingTop: 5 }}>
                  <img src="/corgi.png" alt="logo" height="55px" />{' '}
                </div>{' '}
                <div className={classes.logo}>
                  Corgib <span className={classes.highlight}>MarketPlace</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <Link to={'/market'}>
              <Typography className={classes.tabs} variant="body1" noWrap>
                Explore
              </Typography>
            </Link>

            <Link to={'/market/profile'}>
              <Typography className={classes.tabs} variant="body1">
                Activities
              </Typography>
            </Link>
            <Link to={'/market/profile'}>
              <Typography className={classes.tabs} variant="body1">
                Profile
              </Typography>
            </Link>

            <div className={classes.sectionDesktop}>
              <div style={{ paddingRight: 10 }}>
                {' '}
                <div className="text-center">
                  <Button className={classes.normalButton}>Connect Wallet</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div className="d-flex flex-row  justify-content-start align-items-center">
              <div style={{ paddingTop: 5 }}>
                <img src="/corgi.png" alt="logo" height="55px" />{' '}
              </div>{' '}
              <div style={{ fontWeight: 600, color: '#e5e5e5', fontSize: 20, letterSpacing: '-1px', paddingTop: 5 }}>
                Corgib <span className={classes.highlight}>MarketPlace</span>
              </div>
            </div>

            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <div>
                    <IconButton
                      aria-label="Menu"
                      aria-haspopup="true"
                      className={classes.menuIcon}
                      onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon style={{ fontSize: 28 }} />
                    </IconButton>
                  </div>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
