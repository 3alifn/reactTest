import { useContext, lazy, Suspense} from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import AppNameProvider from "./components/appName";
import Test from "./testApp";
const container= document.getElementById('root');
const root= createRoot(container);
const LazyComponent= lazy(()=> {
   return import('./App')
  }) 


function App(){
  return (
    <>
    <AppNameProvider/>
    <Header/>
    <Content print="Hello World"/>
    <Suspense fallback={<code className="bg-primary text-dark">Loading...</code>}>
    <LazyComponent/>
    </Suspense>
    <Test/>
    <Footer/>
    </>
  )

}

root.render(<App/>)