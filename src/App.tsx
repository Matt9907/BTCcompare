import {useEffect, useState} from "react";
import AmountInput from "./AmountInput";
import ResultRow from "./ResultRow";
import axios from "axios";
function App() {
  const [amount, setAmount] = useState('100');
  const [cachedResults, setCachedResults] = useState([]);
  
  useEffect(() =>{
    axios.get('https://d9i497wm8d.us.aircode.run/cachedValues')
    .then(res =>{
      setCachedResults(res.data);
    });
  },[]);


  return (
<main className = "max-w-2xl mx-auto px-4 py-8">
  <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%">
    Find Cheapest BTC
    </h1>

<div className="flex justify-center mt-6">
  <AmountInput 
  value = {amount} 
  onChange={e=>setAmount(e.target.value)} 
  />

</div>
<div className="mt-6"> 
  <ResultRow />
  <ResultRow />
  <ResultRow />
  <ResultRow />
</div>
  




</main>
  )
    
}
///Making api calls in AirCode ide

//All prices are fetched, now caching prices

//Values are now cached and will constantly update due to Chrome Jump.
//Working on porting from aircode to VSCode

export default App
