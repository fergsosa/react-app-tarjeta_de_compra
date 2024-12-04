import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter basename="/react-app-tarjeta_de_compra/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
