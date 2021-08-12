import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopCard from "./../../components/TopCard";
import ItemsSection from "./../../components/ItemsSection";
import TopArtist from "./../../components/TopArtist";
import LiveAuctions from "./details/TrendingItems";
import Footer from "../../common/Footer";
import Category from "../../components/Category";
import TrendingItems from "./details/TrendingItems";
import FilterTab from "../../components/FilterTab";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
  },
}));

function Marketplace() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <div>
          <TopCard />
        </div>
        <div>
          <ItemsSection />
        </div>
        <div className="mt-3">
          <TopArtist />
        </div>
        <div className="mt-3">
          <TrendingItems />
        </div>

        {/* Category tabs and their items moved into one file and create a seperate component for single item */}
        <div className="mt-3">
          <FilterTab />
          <Category />
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default Marketplace;
