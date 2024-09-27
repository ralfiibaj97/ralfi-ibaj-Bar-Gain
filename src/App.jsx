import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import AddBarForm from "./Components/AddBar/AddBarForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/add-bar" element={<AddBarForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

