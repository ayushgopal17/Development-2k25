
import { useEffect, useMemo, useState } from 'react'


function App() {
 const [exchange1Data,setExchange1Data]=useState({});
 const [exchange2Data,setExchange2Data]=useState({});
 const [bankData,setBankData]=useState({});
console.log("Hi there")

useEffect(()=>{
setTimeout(()=>
{
  setExchange1Data({
    returns: 100
  });
});
},[])

useEffect(function(){
setExchange2Data({
  returns:100
});
},[])


useEffect( function() {
setTimeout(()=>
{
  setBankData({income:100});
},5000);
},[])

const cryptoreturns=useMemo(()=>{
  console.log("Hi there before")
return exchange1Data.returns+exchange2Data.returns;
},[exchange1Data,exchange2Data])

// const cryptoreturns =exchange1Data.returns+exchange2Data.returns;

const incometax=(cryptoreturns + bankData.income) * 0.3;
  return (
    <div>
    hi there, your income tax return are {incometax}

    </div>
  )
}

export default App
