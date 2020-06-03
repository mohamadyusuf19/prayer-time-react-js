import React, { useState, useContext } from "react";
import AsyncSelect from "react-select/async";
import { OnFocusContext } from "../../context/onFocusMapContext";

const Input = ({ onChange, value, data, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const { onFocus, ChangeInputContext, MouseOut } = useContext(OnFocusContext);

  const filterData = (inputValue) => {
    return data.filter((i) =>
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
      defaultOptions={data}
      onInputChange={handleInputChange}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onFocus={ChangeInputContext}
      onBlur={MouseOut}
      onKeyDown
    />
  );
};

export default Input;
