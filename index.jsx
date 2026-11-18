const { useState, useMemo } = React;

const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

export function CurrencyConverter() {
const [name,setName]=useState("USD");
const [name2,setName2]=useState("EUR");
const [amount,setAmount]=useState(1);

const calculation=useMemo(()=>{
  const result={};
  for(const valor in goodMapping){
      result[valor]=amount/goodMapping[name]*goodMapping[valor];
}
return result;
}, [amount,name]);

return(
  <div className="info">
  <h1>Currency Converter</h1>
  <p>{name} to {name2} Conversion</p>
   <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))}/>
   <p>Start Currency:</p>
   <select value={name} onChange={e=>setName(e.target.value)}>
   <option value="USD">USD</option>
   <option value="EUR">EUR</option>
   <option value="GBP">GBP</option>
   <option value="JPY">JPY</option>
   </select>
   <p>Target Currency:</p>
   <select value={name2} onChange={e=>setName2(e.target.value)}>
   <option value="USD">USD</option>
   <option value="EUR">EUR</option>
   <option value="GBP">GBP</option>
   <option value="JPY">JPY</option>
   </select>
   <p className="rta">Converted Amount: {calculation[name2].toFixed(2)} {name2}</p>
  </div>
);
}
