import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HighchartsMap from "../Charts/highchart";
import LineChart from "../Charts/linechart";

Summary.propTypes = {};

function Summary({ data, selectedCoutryById }) {
    const [mapdata, setMapdata] = useState({});
    useEffect(() => {
        if (selectedCoutryById) {
            import(
                `@highcharts/map-collection/countries/${selectedCoutryById}/${selectedCoutryById}-all.geo.json`
            ).then((res) => {
                setMapdata(res);
            });
        }
    }, [selectedCoutryById]);
    return (
        <Grid container  style={{marginTop:'30px'}} spacing={3}>
            <Grid sm={8} xs={12}>
                <LineChart data={data} />
            </Grid>
            <Grid sm={4} xs={12}>
                <HighchartsMap mapData={mapdata} />
            </Grid>
        </Grid>
    );
}

export default Summary;
