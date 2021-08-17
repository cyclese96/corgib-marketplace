import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import useTabs from "../hooks/useTabs";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // marginBottom: 50,
  },
  default_tabStyle: {
    color: "black",
    fontSize: 14,
    fontWeight: 600,
  },
  active_tabStyle: {
    fontSize: 14,
    color: "#C80C81",
    fontWeight: 700,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function AppbarTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { changeTabIndex } = useTabs();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeTabIndex(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#E0077D",
          },
        }}
        centered
        className={classes.root}
      >
        <Tab
          component={Link}
          to={"/"}
          className={
            value === 0 ? classes.active_tabStyle : classes.default_tabStyle
          }
          label="Explore"
        />
        <Tab
          component={Link}
          to={"/profile"}
          className={
            value === 1 ? classes.active_tabStyle : classes.default_tabStyle
          }
          label="Profile"
        />

        <Tab
          component={Link}
          to={"/profile"}
          className={
            value === 2 ? classes.active_tabStyle : classes.default_tabStyle
          }
          label="Activities"
        />
      </Tabs>
    </>
  );
}
