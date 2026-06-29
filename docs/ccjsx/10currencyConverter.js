const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [moneyFrom, setMoneyFrom] = useState("USD");
  const [moneyTo, setMoneyTo] = useState("EUR");
  const [moneyStart, setMoneyStart] = useState(0);

const  currencyMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

const fromAmount = useMemo(() => {
  return moneyStart / currencyMapping[moneyFrom];
}, [moneyStart, moneyFrom]);

const convertedAmount =
  fromAmount * currencyMapping[moneyTo];
  
return (
  <>
  <div className="converterPage">
  <div className="convertWindow">
    <h1>Currency Converter</h1>
    <h2>{moneyFrom} to {moneyTo} Conversion</h2>
    <input
      type="number"
      required
      value={moneyStart}
      onChange={(e) => setMoneyStart(Number(e.target.value))}/>

    <div className="field">
     <label htmlFor="moneyFrom">Starting Currency</label>
        <select
          id="moneyFrom"
          value={moneyFrom}
          onChange={(e) => setMoneyFrom(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
    </div>
    
    <div className="field">
    <label htmlFor="moneyTo">Target Currency</label>
        <select
          id="moneyTo"
          value={moneyTo}
          onChange={(e) => setMoneyTo(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
    </div>
     
     <h3>
      Converted Amount: {convertedAmount.toFixed(2)} {moneyTo}
    </h3>
    </div>
    </div>
    </>
);}