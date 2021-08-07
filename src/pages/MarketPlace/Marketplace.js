import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopCard from "./../../components/TopCard";
import ItemsSection from "./../../components/ItemsSection";
import TopArtist from "./../../components/TopArtist";
import LiveAuctions from "./details/LiveAuctions";
import HotCollection from "./details/HotCollection";
import TopBid from "./details/TopBid";
import Footer from "../../common/Footer";
import Category from "../../components/Category";

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
        <TopCard />
        <ItemsSection />
        <TopArtist />
        <LiveAuctions />
        <HotCollection />
        <TopBid />
        <Category />
        <Footer />
      </section>
    </div>
  );
}
export default Marketplace;
