import React from 'react';
import { Paper } from '@material-ui/core';

import './HomeScreen.scss';

function HomeScreen() {
  return (
    <div className="homeContainer">
      <Paper className="homeCard" elevation={10}>
        <h2>Welcome to</h2>
        <h1>memeR</h1>
        <p>Create memes easily and conveniently.</p>
      </Paper>
    </div>
  );
}

export default HomeScreen;
