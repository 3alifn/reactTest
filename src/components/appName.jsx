import { createContext, useContext } from "react";

// Create the context outside of the component
const AppNameContext = createContext();

function AppNameProvider() {
    const appNameV = 'React v19.0.0';
    return (
        <AppNameContext.Provider value={appNameV}>
           <AppNameComponent/> <br />
           <AppNameComponent2 text='Hello Component'/> <br />
        </AppNameContext.Provider>
    );
}

function AppNameComponent() {
    const appName = useContext(AppNameContext);
    return <code>{appName}</code>;
}

function AppNameComponent2(props) {
    return <code>{props.text}</code>;
}

function X(props){
return props.com
}


export default function Y(){
    <X com={AppNameProvider}/>
};
