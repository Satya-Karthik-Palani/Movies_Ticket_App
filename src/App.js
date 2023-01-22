import React,{useEffect,useState} from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summary from './components/Summary/Summary';

function App() {
  const [Data,setData] = useState([]);
  const [Summ,setSumm] = useState([]);
  const [Show,setShow] = useState([]);
    useEffect(() => {
      fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err => console.log("Error: ", err))
    }, []);
  const generateSummary = (e,id)=>{
    e.preventDefault();
    const exist = Data.find(x => x.show["id"] === id);
    if(exist){
      setSumm(exist.show["summary"])
      setShow(exist)
      // console.log("existing :",exist);
    }
    else{
      // console.log("Does not exist");
    }
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home generateSummary={generateSummary} Data={Data}/>}></Route>
          <Route exact path='/summary' element={<Summary show={Show} summary={Summ}/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App