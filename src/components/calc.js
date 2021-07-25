import React, { useState } from 'react';



const Calculadora  = () => {

  const numbers = [[9,8,7,6],[5,4,3],[2,1,0]]
  const lastRow= ["="]
  const simbols = ["AC","+/-","/","*","-","+",".","<--"]
  const [display,setDisplay]=useState("".toString())
  

  function simb(e){
    const simb=e.target.innerText

    if(simb==="AC")setDisplay("")
    
    
    
    else if(simb==="<--"){
      if(display.split("").length>1){
        let new_display=display.split("")
        new_display.pop()
        setDisplay(new_display.join(""))
       }
    }
    else if(simb==="+"||simb==="-"||simb==="*"||simb==="/")setDisplay(prev=>prev+simb)

    else if(simb==="."){
      if(!display.split("").includes(".")){
      
        console.log("no")
        setDisplay(prev=>prev+".")
      } 
      else console.log("yes")
    }

    else if(simb==="+/-"){
      
      if(display.search(/[+|\-|\*|\/]/)>0)setDisplay("Error")
      else setDisplay(prev=>(Number(prev)*-1).toString())
    }
    
  
   
  }

  function num(e){
    const number=e.target.innerText

    setDisplay(prev=>prev+number)

    
  }

  function igual (){
    const total=eval(display)
    setDisplay(total.toString())
  }

    return (
      <div className=" my-container">
        <div className="row my-row justify-content-center">
          <div className="col-10 m-2 pantalla" style={{height:"50px"}}>
    <span className="h3">{display}</span>
          </div>
    
          {simbols.map(col=><div key={col} className="col-3 m-1 my-col simbols" onClick={simb}>{col}</div>)}
          {numbers.map(ele=>ele.map(col=><div key={col} className="col-3 m-1 my-col" onClick={num}>{col}</div>))}

        <div key={"="} className="col-6 mt-1 ml-2 simbols " id="igual" onClick={igual}>=</div>
      
        </div>
          
          
            
      
        
      </div>
      );
}
 
export default Calculadora;
