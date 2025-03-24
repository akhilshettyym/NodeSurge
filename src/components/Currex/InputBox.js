"use client";

import React, { useId } from "react";

function InputBox(props) {
  const {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
  } = props;

  const amountInputId = useId();

  return React.createElement(
    "div",
    { className: `input-box ${className}` },
    React.createElement(
      "div",
      { className: "input-section" },
      React.createElement("label", { htmlFor: amountInputId, className: "input-label" }, label),
      React.createElement("input", {
        id: amountInputId,
        className: "amount-input",
        type: "number",
        placeholder: "Amount",
        disabled: amountDisable,
        value: amount || "",
        onChange: (e) => onAmountChange && onAmountChange(Number(e.target.value)),
      })
    ),
    React.createElement(
      "div",
      { className: "currency-section" },
      React.createElement("p", { className: "currency-label" }, "Currency Type"),
      React.createElement(
        "select",
        {
          className: "currency-select",
          value: selectCurrency,
          onChange: (e) => onCurrencyChange && onCurrencyChange(e.target.value),
          disabled: currencyDisable,
        },
        currencyOptions.map((currency) =>
          React.createElement("option", { key: currency, value: currency }, currency.toUpperCase())
        )
      )
    )
  );
}

export default InputBox;