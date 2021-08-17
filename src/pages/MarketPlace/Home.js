import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopCard from "../../components/TopCard";
import TrendingItems from "./details/TrendingItems";
import FeaturedItem from "../../components/FeaturedItems";
import TopCreator from "../../components/TopCreator";
import CategoryList from "../../components/CategoryList";

const useStyles = makeStyles((theme) => ({
  background: {
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
        <div className="mt-3">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
export default Home;
