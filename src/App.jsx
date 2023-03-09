import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Message from "./components/Message";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Message />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
