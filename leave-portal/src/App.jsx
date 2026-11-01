import React from "react";
import {
    HashRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import ViewData from "./pages/ViewData";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/viewdata" element={<ViewData />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </HashRouter>
    );
}

export default App;
