import { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Grid from './components/Grid';

function App() {
  const [response, setResponse] = useState({});
  const [states, setStates] = useState([]);
  const [chart, setChart] = useState([]);
  const getStateListItems = (e) => {
    setChart(response.regionData[e.target.id]);
  }
  useEffect(()=>{
    const callTheAPI = async() => {
      const result = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      });
      const res = await result.json();
      setResponse(res);
      let statesArr = res.regionData.map((data)=> {
        return data.region;
      });
      console.log(res.regionData[0]);
      setStates(statesArr);
      setChart(res.regionData[0]);
    }
    callTheAPI();
  },[]);
  return (
    <div className="App">
      {(states.length > 0)? <Grid stateList={states} getStateListItems={(e)=>getStateListItems(e)}/>: ''}
      {(Object.keys(chart).length > 0)? <Chart chart={chart}/>: ''}
    </div>
  );
}

export default App;
