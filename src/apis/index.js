import axios from "axios";
import moment from "moment";

export const getCountries = () =>
    axios.get("https://api.covid19api.com/countries");
export const getCountrybyReport = (country) =>
    //axios.get(`https://api.covid19api.com/dayone/country/${country}`);
    axios.get(
        `https://api.covid19api.com/dayone/country/${country}?from=2021-01-01T00:00:00&to=${moment()
          .utc(0)
          .format()}`);