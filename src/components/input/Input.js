import React, { useState } from "react";

import AsyncSelect from "react-select/async";
import { dataRegion } from "../../data/Region";

const Input = ({ onChange, value }) => {
  const [inputValue, setInputValue] = useState("");

  const filterData = (inputValue) => {
    return dataRegion.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterData(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
    return inputValue;
  };
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions={dataRegion}
      onInputChange={handleInputChange}
      isClearable={true}
      onChange={onChange}
      value={value}
      placeholder='Pilih Kotamu'
    />
  );
};

export default Input;
