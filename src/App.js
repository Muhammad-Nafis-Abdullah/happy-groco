import { createContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Welcome from "./Components/Welcome";
import useFetch from "./hooks/useFetch";
import Home from "./Components/Home"
import NotFound from "./Components/NotFound";

export const MyContext = createContext({});

function App() {
  const products = useFetch('products.json');

  return (
    <MyContext.Provider value={{products}}>
      <div className="">
      <Routes>
        <Route path="/" element={<Navigate to='/welcome'/>} />
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        <Route path="/home" element={<Home></Home>}>
          <Route path="" element={<Products/>}></Route>
        </Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
    </MyContext.Provider>
  );
}

export default App;
