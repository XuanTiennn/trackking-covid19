import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCountries, getCountrybyReport } from "./apis";
import "./App.css";
import CountrySelector from "./components/countrySelector";
import Hightlights from "./components/highlights";
import Summary from "./components/summary";
function App() {
    const [country, setcountry] = useState([]);
    const [countryByreport, setCountryByReport] = useState([]);
    const [contrybySlug, setCountryBySlug] = useState([]);
    useEffect(() => {
        getCountries().then((res) => {
            setcountry(res.data);
        });
    }, []);
    const handleOnChange = (e) => {
        setCountryByReport(
            country.find((x) => x.ISO2.toLowerCase() === e.target.value)
        );
    };
    useEffect(() => {
        getCountrybyReport(countryByreport.Slug).then((res) => {
            res.data.pop();
            setCountryBySlug(res.data);
        });
    }, [country, countryByreport]);
    return (
        <Container>
            <CountrySelector
                countries={country}
                handleOnChange={handleOnChange}
            />
            <Hightlights data={contrybySlug} />
            <Summary />
        </Container>
    );
}

export default App;
