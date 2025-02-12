import { memo, useEffect, useContext } from "react";
import AppName from "./appName";
import { helloContext } from "../contexts/globalContext";
function Header(){
   const hello= useContext(helloContext)
    return (
        <>
        {hello}
         <h1>This Is Header </h1>
        </>
       
    )
}

export default memo(Header);