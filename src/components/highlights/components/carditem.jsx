import {
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";

CardItem.propTypes = {};
const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === "confirmed") return { borderLeft: "5px solid red" };
        if (props.type === "active") return { borderLeft: "5px solid green" };
        return { borderLeft: "5px solid gray" };
    },
});
function CardItem({ type, title, count }) {
    const classes = useStyles({ type });
    return (
        <>
            <Grid  item sm={4} xs={12}>
                <Card className={classes.wrapper}>
                    <CardContent>
                        <CardContent>
                            <Typography component="p" variant="body2">
                                {title}
                            </Typography>
                            <Typography style={{fontWeight:'bold'}} component="span" variant="body2">
                              <CountUp end={count || 0} duration={2} separator=" "/> 
                            </Typography>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

export default CardItem;
