import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import AddBarForm from "./Components/AddBar/AddBarForm";
import BarDetails from "./Components/BarDetails/BarDetails";
import AddHappyHourForm from "./Components/AddHappyHour/AddHappyHourForm";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/add-bar" element={<AddBarForm />} />
    <Route path="/bars/:barId" element={<BarDetails />} />
    <Route path="/bars/:barId/add-happy-hour" element={<AddHappyHourForm />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;

