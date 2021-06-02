import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import LineChart from '../Charts/linechart';

Summary.propTypes = {
    
};

function Summary(props) {
    return (
        <Grid container spacing={3}>
            <Grid sm={8} xs={12}>
             <LineChart  />
            </Grid>
            <Grid sm={4} xs={12}>

            </Grid>
            
        </Grid>
    );
}

export default Summary;