import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Section, Container, SearchForm, SearchBar } from "./styles";
import "boxicons";
const SearchSection = () => {
  const [town, setTown] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [type, setType] = React.useState("");
  const handleTownChange = (event) => {
    setTown(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  return (
    <Section>
      <Container>
        <h1>Discover Most Suitable Property</h1>
        <p>
          Find a variety of properties that suite you very easly, forget all
          difficulties in finding a residance for you.
        </p>
        <SearchBar>
          <SearchForm>
            <div>
              <FormControl
                sx={{ width: "90%", outline: "none", border: "none" }}
              >
                <InputLabel id="demo-simple-select-helper-label-type">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label-type"
                  id="demo-simple-select-helper"
                  value={type}
                  label="type"
                  onChange={handleTypeChange}
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{ width: "90%", outline: "none", border: "none" }}
              >
                <InputLabel id="demo-simple-select-helper-label-country">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label-country"
                  id="demo-simple-select-helper"
                  value={country}
                  label="Country"
                  onChange={handleCountryChange}
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{ width: "90%", outline: "none", border: "none" }}
              >
                <InputLabel id="demo-simple-select-helper-label-town">
                  Town
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label-town"
                  id="demo-simple-select-helper"
                  value={town}
                  label="Town"
                  onChange={handleTownChange}
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button type="submit">
              <box-icon name="search" color="var(--body-color)"></box-icon>
            </button>
          </SearchForm>
        </SearchBar>
      </Container>
    </Section>
  );
};

export default SearchSection;
