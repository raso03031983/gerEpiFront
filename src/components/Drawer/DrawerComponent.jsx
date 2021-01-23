import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import ClearAllIcon from '@material-ui/icons/ClearAll';
import BuildIcon from '@material-ui/icons/Build';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import List from "@material-ui/core/List";
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import ListItem from "@material-ui/core/ListItem";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Home from "../../pages/home";
import Familia from "../../pages/Familia";
import Divisao from "../../pages/Divisao";
import Categoria from "../../pages/Categoria";
import Classificacao from "../../pages/Classificacao";
import Equipamentos from "../../pages/Equipamentos";
import GSE from "../../pages/GSE";
import Integrantes from "../../pages/Integrantes";
import Fornecedores from "../../pages/Fornecedores";
import Relatorios from "../../pages/Relatorios";

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider/>
        <List button>
          <ListItem key={"Home"} component={Link} to={"/Home"} button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem key={"Familia"} component={Link} to={"/Familia"} button>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary={"Familia"} />
          </ListItem>
          <ListItem key={"Divisao"} component={Link} to={"/Divisao"} button>
            <ListItemIcon>
              <ClearAllIcon />
            </ListItemIcon>
            <ListItemText primary={"Divisão"} />
          </ListItem>
          <ListItem key={"Categoria"} component={Link} to={"/Categoria"} button>
            <ListItemIcon>
              <CalendarViewDayIcon />
            </ListItemIcon>
            <ListItemText primary={"Categoria"} />
          </ListItem>
          <ListItem key={"Classificacao"} component={Link} to={"/Classificacao"} button>
            <ListItemIcon>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText primary={"Classificação"} />
          </ListItem>
          <ListItem key={"Equipamentos"} component={Link} to={"/Equipamentos"} button>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary={"Equipamentos"} />
          </ListItem>
          <ListItem key={"GSE"} component={Link} to={"/GSE"} button>
            <ListItemIcon>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary={"GSE"} />
          </ListItem>
          <ListItem key={"Integrantes"} component={Link} to={"/Integrantes"} button>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={"Integrantes"} />
          </ListItem>
          <ListItem key={"Fornecedores"} component={Link} to={"/Fornecedores"} button>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary={"Fornecedores"} />
          </ListItem>
          <ListItem key={"Relatorios"} component={Link} to={"/Relatorios"} button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary={"Relatórios"} />
          </ListItem>
        </List>
      {/* <List>
        {["Home", "Familia", "Divisão", "Categoria", "Classificação", "Equipamentos", 
          "GSE", "Integrantes", "Fornecedores", "Relatórios"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MinimizeIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="inherit" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            GER-EPI V1
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/Home" render={() => <Home />} />
            <Route path="/Familia" render={() => <Familia />} />
            <Route path="/Divisao" render={() => <Divisao />} />
            <Route path="/Categoria" render={() => <Categoria />} />
            <Route path="/Classificacao" render={() => <Classificacao />} />
            <Route path="/Equipamentos" render={() => <Equipamentos />} />
            <Route path="/GSE" render={() => <GSE />} />
            <Route path="/Integrantes" render={() => <Integrantes />} />
            <Route path="/Fornecedores" render={() => <Fornecedores />} />
            <Route path="/Relatorios" render={() => <Relatorios />} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
