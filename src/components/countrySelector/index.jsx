import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormHelperText, InputLabel, NativeSelect } from "@material-ui/core";

CountrySelector.propTypes = {};

function CountrySelector({ value, handleOnChange, countries }) {
 
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="country-selector" shrink>
                    Quốc gia
                </InputLabel>
                <NativeSelect
                    value={value}
                    onChange={handleOnChange}
                    inputProps={{
                        name: "country",
                        id: "country-selector",
                    }}
                >
                    {countries.map((country) => (
                        <option value={country.ISO2.toLowerCase()}>
                            {country.Country}
                        </option>
                    ))}
                </NativeSelect>
                <FormHelperText>Chọn quốc gia</FormHelperText>
            </FormControl>
        </div>
    );
}

export default CountrySelector;
