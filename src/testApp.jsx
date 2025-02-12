import { useCallback, useEffect, useMemo, useState, memo } from "react";

const Demo= memo(()=>{
    console.log('Demo component mounted...');
    
})
function Test(){
    const [count, setCount]= useState(0);
   const useCallbackDef= useCallback(()=>{
    console.log('useCallback mounted...');
    }, [count])
 useEffect(()=>{
    useCallbackDef()
 }, [useCallbackDef])

    const useMemoDef= useMemo(()=>{
    let log= count;
    console.log('useMemo mounted...');
    return log;
}, [count])

return (
<div>
<Demo/>
<code>{count}, {useMemoDef}</code>
<button className="btn" onClick={()=> setCount((prevCount)=> prevCount+1)}>++</button>
</div>

)

}

export default Test;