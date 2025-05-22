import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { StrictMode } from "react";
import { App } from "./app";
import { CodeForm } from "./pages/Form";
import { Info } from "./pages/Info";
import "./index.css";

const root = createRoot(document.body);
root.render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route index element={<App />}></Route>
                <Route element={<CodeForm />} path="/form"></Route>
                <Route element={<CodeForm />} path="/edit/:id" />
                <Route element={<Info />} path="/info"></Route>
            </Routes>
        </HashRouter>
    </StrictMode>
);
