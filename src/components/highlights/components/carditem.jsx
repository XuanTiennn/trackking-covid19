import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";

CardItem.propTypes = {};
const useStyles=makeStyles({
    wrapper:(props)=>{
        if (props.type === 'confirmed') return {borderLeft:'5px solid red'}
        if (props.type === 'active') return {borderLeft:'5px solid green'}
        return {borderLeft:'5px solid gray'}
    }
        
    
})
function CardItem({ type, title, count }) {
    const classes=useStyles({type})
    return (
        <>
            <Grid className={classes.wrapper} item sm={4} xs={12}>
                <CardContent>
                    <CardContent>
                        <Typography component="p" variant="body2">
                            {title}
                        </Typography>
                        <Typography component="span" variant="body2">
                            {count}
                        </Typography>
                    </CardContent>
                </CardContent>
            </Grid>
        </>
    );
}

export default CardItem;
