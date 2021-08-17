import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomMenu from "../common/CustomMenu";
import CategoryCard from "./CategoryCard";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 20,
    width: "100%",
  },

  mainCard: {
    borderTop: 10,
    borderBottom: 10,
    borderColor: "red",
    backgroundColor: "white",
    height: 400,
    padding: 15,
    borderRadius: 30,
    width: "100%",
    background: `linear-gradient(to right,#ede7f6, #ede7f6)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },

  heading: {
    color: theme.palette.pbr.textPrimary,
    textAlign: "left",
    fontSize: "2.08vw",
    lineHeight: "41.4px",
    fontWeight: 800,
    verticalAlign: "baseline",
    fontSize: 28,
  },
  categoryTab: {
    display: "inline",
    border: "1px solid #616161",
    width: "fit-content",
    borderRadius: "20px",
    fontSize: 13,
    fontWeight: 500,
    padding: "8px 15px 8px 15px",
    marginRight: "12px",
    cursor: "pointer",
    height: "40px",
    textTransform: "capitalize",

    color: "#C80C81",
    [theme.breakpoints.down("md")]: {
      padding: "6px 14px 6px 14px",
      fontSize: 13,
      height: "35px",
      marginRight: "5px",
    },
  },
  categoryTabActive: {
    display: "inline",
    width: "fit-content",
    border: "1px solid #C80C81",
    borderRadius: "20px",
    fontSize: 13,
    fontWeight: 500,
    padding: "8px 15px 8px 15px",
    height: "40px",
    marginRight: "12px",
    cursor: "pointer",
    textTransform: "capitalize",
    backgroundColor: "#C80C81",
    color: "white",

    [theme.breakpoints.down("md")]: {
      padding: "6px 14px 6px 14px",
      fontSize: 13,
      height: "35px",
      marginRight: "5px",
    },
  },
  sectionDesktop: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  icon: {
    fontSize: 18,
  },

  filterTabsDesktop: {
    paddingTop: 15,
    paddingBottom: 15,

    whiteSpace: "noWrap",
    overflowX: "auto",
  },
  filterTabsMobile: {
    paddingTop: 15,
    paddingBottom: 15,

    whiteSpace: "noWrap",
    overflowX: "auto",
  },
  sortIcon: {
    display: "flex",
    justifyContent: "center",
  },
}));

var localCategories = [
  { id: 1, name: "Art" },
  { id: 2, name: "Photography" },
  { id: 3, name: "Game" },
  { id: 4, name: "Music" },
  { id: 5, name: "Defi" },
  { id: 6, name: "Domains" },
];

function CategoryList({ getItems, items, categories }) {
  const classes = useStyles();

  const [collection, setCollection] = useState([]);
  const [itemCategories, setItemCategories] = useState(localCategories);
  const [numbers, setNumbers] = useState([1, 5, 4, 2, 3]);
  const [selectedCat, setSelectedCat] = useState("All");

  useEffect(() => {
    if (items !== null) {
      setCollection(items);
    }
    if (categories !== null) {
      setItemCategories(categories);
    }
  }, [items, categories]);

  const sortItems = (type) => {
    let data = [];

    let vvv = numbers.splice(0, 2);

    if (type === "p1") {
      data = items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    if (type === "p2") {
      data = items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    if (type === "l1") {
      data = items.sort((a, b) => parseInt(a.level) - parseInt(b.level));
    }
    if (type === "l2") {
      data = items.sort((a, b) => parseInt(b.level) - parseInt(a.level));
    }

    setNumbers(vvv);
    setCollection(data);
  };
  return (
    <div>
      <div className="mt-5">
        <div className={classes.sectionDesktop}>
          <div className="mb-4">
            <div style={{ float: "right", width: "150px", marginTop: 15 }}>
              <div className="d-flex justify-content-start">
                <CustomMenu sortFn={sortItems} />
              </div>
            </div>
            <div className={classes.sortIcon}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  paddingLeft: 35,
                  paddingRight: 20,
                  paddingTop: 10,
                }}
              >
                Explore
              </div>
              <div style={{ width: "100%" }}>
                <div className={classes.filterTabsDesktop}>
                  <p
                    className={
                      selectedCat === "All"
                        ? classes.categoryTabActive
                        : classes.categoryTab
                    }
                    //   onClick={() => FilterList("All")}
                  >
                    All
                  </p>
                  {localCategories.map((cat, index) => {
                    return (
                      <p
                        key={index}
                        className={
                          selectedCat === cat.name
                            ? classes.categoryTabActive
                            : classes.categoryTab
                        }
                        //   onClick={() => FilterList(cat.name)}
                      >
                        {cat.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.sectionMobile}>
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <h1 className="heading">Explore </h1>
            </div>
            <div>
              <CustomMenu sortFn={sortItems} />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={classes.filterTabsMobile}>
              <p
                className={
                  selectedCat === "All"
                    ? classes.categoryTabActive
                    : classes.categoryTab
                }
                //   onClick={() => FilterList("All")}
              >
                All
              </p>

              {localCategories.map((cat, index) => {
                return (
                  <p
                    key={index}
                    className={
                      selectedCat === cat.name
                        ? classes.categoryTabActive
                        : classes.categoryTab
                    }
                    //   onClick={() => FilterList(cat.name)}
                  >
                    {cat.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.background}>
        <div className={classes.mainCard}>
          {/* Infinite scroll will be implemented */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div className={classes.background}>
        <div className={classes.mainCard}>
          {/* Infinite scroll will be implemented */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
