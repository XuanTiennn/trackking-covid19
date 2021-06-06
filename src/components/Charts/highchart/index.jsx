import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { cloneDeep } from "lodash";
import React, { useEffect, useRef, useState } from "react";
HighchartsMap.propTypes = {};
//load highcharts module
highchartsMap(Highcharts);
const initOptions = {
    chart: {
        height: "500",
    },
    title: {
        text: null,
    },
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        min: 0,
        stops: [
            [0.2, "#FFC4AA"],
            [0.4, "#FF8A66"],
            [0.6, "#FF392B"],
            [0.8, "#B71525"],
            [1, "	#7A0826"],
        ],
    },
    legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "bottom",
    },
    series: [
        {
            mapData: {},
            name: "Dân số",
            joinBy: ["hc-key", "key"],
        },
    ],
};

function HighchartsMap({ mapData }) {
    const [options, setOptions] = useState({});
    const [maploaded, setmaploaded] = useState(false);
    const chartRef = useRef(null);
    // console.log(mapData);
    useEffect(() => {
        if (mapData && Object.keys(mapData).length) {
            const fakedata = mapData.features.map((feature, index) => ({
                key: feature.properties["hc-key"],
                value: index,
            }));

            setOptions(() => ({
                ...initOptions,
                title: {
                    text: mapData.title,
                },
                series: [
                    {
                        ...initOptions.series[0],
                        mapData: mapData,
                        data: fakedata,
                    },
                ],
            }));

            if (!maploaded) setmaploaded(true);
        }
    }, [mapData, maploaded]);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            chartRef.current.chart.series[0].update({
                mapData,
            });
        }
    }, [mapData, options]);

    if (!maploaded) return null;

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={cloneDeep(options)}
            constructorType="mapChart"
            ref={chartRef}
        />
    );
}

export default React.memo(HighchartsMap);
