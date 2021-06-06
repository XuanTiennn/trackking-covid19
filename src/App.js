import { Container, Typography } from "@material-ui/core";
import sortBy from "lodash.sortby";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getCountries, getCountrybyReport } from "./apis";
import "./App.css";
import CountrySelector from "./components/countrySelector";
import Hightlights from "./components/highlights";
import Summary from "./components/summary";
import "moment/locale/vi";
import "@fontsource/roboto";

moment("vi");

function App() {
    const [country, setcountry] = useState([]);
    const [countryByid, setCountryByid] = useState('');
    const [contrybySlug, setCountryBySlug] = useState([]);
    useEffect(() => {
        getCountries().then((res) => {
            const countries = sortBy(res.data, "Country");
            setcountry(countries);
            setCountryByid("vn");
        });
    }, []);
    // const handleOnChange = (e) => {
    //     setCountryByid(
    //         e.target.value
    //         //country.find((x) => x.ISO2.toLowerCase() === e.target.value)
    //     );
    // };
    const handleOnChange = React.useCallback((e) => {
        setCountryByid(e.target.value);
      }, []);
    useEffect(() => {
        if (countryByid) {
            const slug = country.find(
                (x) => x.ISO2.toLowerCase() === countryByid
            );
            getCountrybyReport(slug?.Slug).then((res) => {
                res.data.pop();
                setCountryBySlug(res.data);
            });
        }
    }, [country, countryByid]);
    return (
        <Container style={{marginTop:'20px'}}>
            <Typography variant="h3" component="h2">
                Số Ca Mắc COVID19
            </Typography>
            <Typography>{moment().format("LLL")}</Typography>
            <CountrySelector
                countries={country}
                handleOnChange={handleOnChange}
                value={countryByid}
            />
            <Hightlights data={contrybySlug} />
            <Summary selectedCoutryById={countryByid} data={contrybySlug} />
        </Container>
    );
}

export default App;
