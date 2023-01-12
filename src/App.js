import logo from "./logo.svg";
import { Navigate, Routes, Route, useRoutes } from "react-router-dom";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";
import NotFound from "./components/Notfound";
import { Container } from "semantic-ui-react";
import TopMenu from "./components/Navigation";

function App() {
  let element = useRoutes([
    { path: "/", element: <Layout /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <TopMenu />
      {element}
    </>
  );
}

export default App;
