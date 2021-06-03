import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCountries, getCountrybyReport } from "./apis";
import "./App.css";
import CountrySelector from "./components/countrySelector";
import Hightlights from "./components/highlights";
import Summary from "./components/summary";
function App() {
    const [country, setcountry] = useState([]);
    const [countryByid, setCountryByid] = useState([]);
    const [contrybySlug, setCountryBySlug] = useState([]);
    useEffect(() => {
        getCountries().then((res) => {
            setcountry(res.data);
            setCountryByid("vn");
        });
    }, []);
    const handleOnChange = (e) => {
        setCountryByid(
            e.target.value

            //country.find((x) => x.ISO2.toLowerCase() === e.target.value)
        );
    };
    useEffect(() => {
        if (countryByid) {
            const  slug  = country.find(
                (x) => x.ISO2.toLowerCase() === countryByid
            );
            getCountrybyReport(slug?.Slug).then((res) => {
                res.data.pop();
                setCountryBySlug(res.data);
            });
        }
    }, [country, countryByid]);
    return (
        <Container>
            <CountrySelector
                countries={country}
                handleOnChange={handleOnChange}
                value={countryByid}
            />
            <Hightlights data={contrybySlug} />
            <Summary data={contrybySlug} />
        </Container>
    );
}

export default App;
