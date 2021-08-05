import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ArrowBack, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: '100vh',
    padding: 30,
    width: '100%',
  },

  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: '-0.1px',
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingBottom: 5,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
  para: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  textContainer: {
    padding: 20,
  },
  actionButton: {
    color: 'white',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '8px 16px 8px 16px',
    fontWeight: 500,
    marginRight: 12,
    background: `linear-gradient(to right,#7b1fa2, #4a148c)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
  },
  normalButton: {
    color: 'white',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '8px 16px 8px 16px',
    fontWeight: 500,
    background: `linear-gradient(to right,#3f51b5, #1a237e)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
  },
  viewAll: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  mainCard: {
    backgroundColor: 'white',
    height: '100%',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'start',
      height: '100%',
    },
  },
  sectionCard: {
    backgroundColor: '#15134A',
    width: 600,
    minHeight: 400,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  textBox: {
    padding: 20,
  },
  nftName: {
    color: theme.palette.market.textPrimary,
    fontWeight: 600,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    paddingBottom: 0,
    fontSize: 28,
    textAlign: 'left',

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  },
  creatorName: {
    color: theme.palette.market.textPrimary,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    paddingBottom: 0,
    fontSize: 16,
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  itemImage: {
    backgroundImage: `url('https://lh3.googleusercontent.com/Z4cgoB6_SeB5swDd_kS27PBJjNM87tDBksEmwFnF5BFv7JDqo7lfpHiAb499QO5lV6L-41bQSzSGx8r8QAMneibbhkfgixAnOIDG_yU')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 10,
    height: 500,
    width: '100%',
    borderRadius: '4%',
    marginBottom: 20,
  },
  highlight: {
    color: `rgba(89, 210, 188, 1)`,
  },
}));

function ItemDetails() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Link to="/" className={classes.link}>
        <h2 className={classes.heading}>
          <ArrowBack />
          Item Details
        </h2>
      </Link>
      <div className={classes.mainCard}>
        <div className="row">
          <div className="col-md-6">
            <div className={classes.sectionCard}>
              <div className={classes.itemImage}></div>
            </div>
          </div>
          <div className="col-md-6">
            {' '}
            <div className={classes.sectionCard}>
              {' '}
              <div className={classes.textBox}>
                <h6 className={classes.nftName}>Tommy Kill Hell NFT Collection 2017</h6>
                <h6 className={classes.creatorName}>
                  By <strong className={classes.highlight}>Carry Minati</strong>
                </h6>
                <div className="mt-5">
                  <p>
                    Experience the art created and animated by Artificial Intelligence! Rewatch this video time and time
                    again. This video will calm you down and become a perfect display piece for large-scale
                    installations. You will own a 100% unique collector’s item that nobody else in the world will ever
                    have. 10 percent of royalty profits go to charity!
                  </p>
                </div>
                <div className="my-4">
                  <h5>
                    Highest Bid: <strong className={classes.highlight}>1.3 ETH</strong>
                  </h5>
                </div>
                <div className="d-flex justify-content-start">
                  <div className="text-center">
                    <Button className={classes.actionButton}>Buy Now</Button>
                  </div>
                  <div className="text-center">
                    <Button className={classes.normalButton}>Save For Later</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetails;
