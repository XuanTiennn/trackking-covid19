import {
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
    NativeSelect,
} from "@material-ui/core";
import React from "react";

CountrySelector.propTypes = {};

const useStyles = makeStyles((theme) => ({
    formcoltroll: {
        margin: theme.spacing(3,0),
    },
}));
function CountrySelector({ value, handleOnChange, countries }) {
    const classes=useStyles();
    return (
        <div>
            <FormControl className={classes.formcoltroll}>
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
                        <option
                            key={country.ISO2}
                            value={country.ISO2.toLowerCase()}
                        >
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
