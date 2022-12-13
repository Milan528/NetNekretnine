import React from "react";
import { InputField, StyledSelect, StyledTextArea } from "./styles";
import debounce from "lodash.debounce";
const Data = ({
  setTitle,
  setDescription,
  setBathRooms,
  setBedRooms,
  setGuests,
  setArea,
  setPrice,
  setStatus,
  setType,
  setParking,
  setRealestateState,
  setRegistered,
}) => {
  const handleRegisteredChange = (event) => {
    setRegistered(event.target.value);
  };
  const handleRealestateStateChange = (event) => {
    setRealestateState(event.target.value);
  };
  const handleParkingChange = (event) => {
    setParking(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleBathRoomsChange = (event) => {
    setBathRooms(event.target.value);
  };
  const handleBedRoomsChange = (event) => {
    setBedRooms(event.target.value);
  };
  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <>
      <InputField
        type="text"
        placeholder="Naslov"
        required
        onChange={debounce(handleTitleChange, 800)}
      />
      <p>
        <label>Opis:</label>
      </p>
      <StyledTextArea
        rows="6"
        cols="100"
        onChange={debounce(handleDescriptionChange, 800)}
      />
      <InputField
        type="number"
        placeholder="Kupatila"
        required
        onChange={debounce(handleBathRoomsChange, 800)}
      />
      <InputField
        type="number"
        placeholder="Spavace sobe"
        required
        onChange={debounce(handleBedRoomsChange, 800)}
      />
      <InputField
        type="number"
        placeholder="Gosti"
        required
        onChange={debounce(handleGuestsChange, 800)}
      />
      <div>
        <InputField
          type="number"
          placeholder="povrsina"
          required
          onChange={debounce(handleAreaChange, 800)}
        />
        <label>
          m<sup>2</sup>
        </label>
      </div>
      <div>
        <InputField
          type="number"
          placeholder="Cena"
          required
          onChange={debounce(handlePriceChange, 800)}
        />
        <label>€</label>
      </div>
      <div>
        <label>Status:</label>
        <StyledSelect onChange={handleStatusChange}>
          <option value="Prodaja">Prodaja</option>
          <option value="Izdavanje">Izdavanje</option>
        </StyledSelect>
      </div>
      <div>
        <label>Tip:</label>
        <StyledSelect onChange={handleTypeChange}>
          <option value="Apartman">Apartman</option>
          <option value="Stan">Stan</option>
          <option value="Kuca">Kuca</option>
        </StyledSelect>
      </div>
      <div>
        <label>Uknjizeno:</label>
        <StyledSelect onChange={handleRegisteredChange}>
          <option value="Da">Da</option>
          <option value="Ne">Ne</option>
        </StyledSelect>
      </div>
      <div>
        <label>Parking mesto:</label>
        <StyledSelect onChange={handleParkingChange}>
          <option value="Da">Da</option>
          <option value="Ne">Ne</option>
        </StyledSelect>
      </div>
      <div>
        <label>Stanje nekretnine:</label>
        <StyledSelect onChange={handleRealestateStateChange}>
          <option value="Novogradnja">Novogradnja</option>
          <option value="Starogradnja">Starogradnja</option>
        </StyledSelect>
      </div>
    </>
  );
};

export default Data;
