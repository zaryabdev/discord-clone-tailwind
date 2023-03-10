import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Message from "./components/Message";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/message",
        element: <Message />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
