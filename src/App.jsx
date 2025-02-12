
import { useState, useEffect, useRef, use, useCallback, useMemo, useReducer} from "react";

function UseApp() {
    let [count, setCount]= useState(0);
    const reducer= (state, action)=>{
      
      if(action=='increement'){
       return {count: state.count+1, action: state.action= 'I++'};
      } 
      if(action=='decreement'){
       return {count: state.count-1, action: state.action= 'D--'};
      }
   }
    let [countReducer, dispatch]= useReducer(reducer, {count: 0, action: ''});
    let [load, setLoad]= useState(0);
    const elem= useRef(0)
    const elemRef= useRef('elem')
    const addCounter= (e)=>{
     setCount((prevCount)=>{
      return prevCount+1;
     });
     
    }   
      const remCounter= (e)=>{
     setCount((prevCount)=>{
      return prevCount-1;
     });
     
    }  
    
  

    const getLogs= (e)=>{
        elem.current+=1;
        console.log(elem.current, elemRef.current.type);
        
    }

    const expensiveCalculation = useMemo(()=>{
            let num=0;
            console.log("Calculating...");
            for (let i = 0; i < 1000000000; i++) {
                num += 1;
            }
            return num;
      
    }, [load])


    return (
      <>
        <h6>Counter: {count}, {countReducer.count}, {countReducer.action}  {', Calc: '} {expensiveCalculation}</h6>
        <button className="btn" type="button" onClick={addCounter}>Increement</button>
        <button className="btn" type="button" onClick={remCounter}>Decreement</button>
        <button className="btn" type="button" onClick={()=> dispatch('increement')}>InreementReducer</button>
        <button className="btn" type="button" onClick={()=> dispatch('decreement')}>DecreementReducer</button>
        <button className="btn"  type="button" onClick={getLogs}>Get Console logs </button>
        <button ref={elemRef} className="btn" disabled type="button" >Auto Trigged Button </button>
        <br />
        <img src="/assets/demo.png" height="100px" width="150px" alt="demo" />
      </>
    )
  }

  export default UseApp;