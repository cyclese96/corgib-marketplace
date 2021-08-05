import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopCard from './../../components/TopCard';
import ItemsSection from './../../components/ItemsSection';
import TopArtist from './../../components/TopArtist';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: '100vh',
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
      </section>
    </div>
  );
}
export default Marketplace;
