"use client"

import React from "react"

import { useState, useEffect, useCallback } from "react"
import useCurrencyInfo from "../../hooks/useCurrencyInfo"
import "../../styles/Currex.css"
import currex from "../../assets/currex.jpg"

function Currex({ mode }) {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = useCallback(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }, [amount, currencyInfo, to])

  useEffect(() => {
    convert()
  }, [convert])

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${currex})`,
      }}
    >
      <div className="container">
        <div className="converter-card">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="input-wrapper">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmountChange={setAmount}
              />
            </div>

            <div className="swap-container">
              <button type="button" className="swap-button" onClick={swap}>
                Swap
              </button>
            </div>

            <div className="input-wrapper">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>

            <button type="submit" className="convert-button">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Include InputBox component directly to ensure it's available
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
  } = props

  const amountInputId = React.useId()

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
      }),
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
          React.createElement("option", { key: currency, value: currency }, currency.toUpperCase()),
        ),
      ),
    ),
  )
}

export default Currex;