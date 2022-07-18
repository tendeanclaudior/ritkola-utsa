import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Login from "./pages/Login";
import List from "./pages/List";
import Registration from "./components/Registration";
import Registration2 from "./components/Registration2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />

        <Route path="/regis" element={<Registration />} />
        <Route path="/regis2" element={<Registration2 />} />
      </Routes>
    </>
  );
}

export default App;
