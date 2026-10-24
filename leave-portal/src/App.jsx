import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Form  from "./pages/Form"
import ViewData from "./pages/ViewData";


function App(){

return (
    <BrowserRouter>
    <Routes>
    <Route 
    path="/#" 
    element={<Login/>}
    />
    <Route 
    path="/" 
    element={<Dashboard/>}
    />
            <Route
                path="/form"
                element={<Form />}
            />
            <Route
                path="/viewdata"
                element={<ViewData />}
            />
    </Routes>
    </BrowserRouter>
)
}
export default App;
