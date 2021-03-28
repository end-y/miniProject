import logo from './logo.svg';
import './App.css';
import data from "./deneme.json"
import { useState, useEffect } from 'react';
function App() {
  let [search, setSearch] = useState("")
  let [click,setClick] = useState(null)
  let [selected, setSelected] = useState("")
  let random = (sayi) => Math.random()*sayi
  useEffect(() => {
    document.body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='0.1' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='${random(1000)}' cy='${random(100)}' r='${random(40)}'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(${random(1000)} ${random(100)})' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='${random(1000)}' y='${random(500)}' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    console.log(random(400))
  }, [])
  let update = (event) => {
    setSearch(event.target.value);
    if(search.length == 0){
      setClick(null)
    }
  }
  let clicked = (e) => {
    console.log(e.target.innerHTML)
      setSelected(e.target.innerHTML)
      selected != e.target.innerHTML ? setClick(true) : setClick(!click)
  }
  return (
    <div  className="App">
        <input placeholder="Start typing and then click the question..." type="text" onChange={update} value={search}  className="inp" />
        <div>{data.filter(e => !e.question.toLowerCase().indexOf(search.toLowerCase()) && search.length != 0).map((e,i) =>
        <div className="questionCard" key={e.id}> 
        <h2 style={{marginBottom:15}}>Question {i+1}</h2>
          <div className="auto">
            <h1 onClick={(a) => clicked(a)} className="header"> <span>{e.question}</span></h1></div>
          {selected == e.question ?
          <div> 
          <div className="txt-wrapper">
            <h1 className={click == false ? "downToUp" : click == true ? "upToDown" : " "}>{e.answer}</h1>
           </div>
           <div style={{opacity:0}} className={click == false ? "sourcesUp" : click == true ? "sourcesDown" : " "}>
             <h3><em>Sources</em></h3>
             <div>{e.sources.map((e,i) => <div key={i}>{e}</div>)}</div>
           </div>
           </div>
           :
           null
          } 
        </div>  
        )}</div>
    </div>
  );
}

export default App;
