import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import CardItem from "./components/carditem";

Hightlights.propTypes = {};

function Hightlights({ data }) {
    const a = data[data.length - 1];
    const summary = [
        {
            title: "Số ca mắc",
            count: a?.Confirmed,
            type: "confirmed",
        },
        {
            title: "Số ca khỏi",
            count: a?.Active,
            type: "active",
        },
        {
            title: "Số ca tử vong",
            count: a?.Deaths,
            type: "deaths",
        },
    ];
    return (
        <Grid container spacing={3}>
            {summary.map((item)=><CardItem count={item.count} title={item.title} type={item.type}  />)}
        </Grid>
    );
}

export default Hightlights;
