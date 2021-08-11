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
      <section>
        <div className="col-md-12">
          <div className="d-flex-column justify-content-center">
            <TopCard />
            <ItemsSection />
            <TopArtist />
            <TrendingItems />
            <FilterTab />
            <Category />
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Marketplace;
