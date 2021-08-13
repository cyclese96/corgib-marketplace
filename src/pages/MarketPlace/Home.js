import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopCard from "../../components/TopCard";
import Footer from "../../common/Footer";
import TrendingItems from "./details/TrendingItems";
import FeaturedItem from "../../components/FeaturedItems";
import TopCreator from "../../components/TopCreator";
import AllItems from "../../components/AllItems";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <div>
          <TopCard />
        </div>
        <div>
          <FeaturedItem />
        </div>
        <div className="mt-3">
          <TopCreator />
        </div>
        <div className="mt-3">
          <TrendingItems />
        </div>

        {/* Category tabs and their items moved into one file and create a seperate component for single item */}
        <div className="mt-3">
          <AllItems />
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default Home;
