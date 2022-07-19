import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Login from "./pages/Login";
import List from "./pages/List";
import Registration from "./components/Registration";
import Registration2 from "./components/Registration2";
import Registration3 from "./components/Registration3";
import RegisDone from "./components/RegisDone";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />

        <Route path="/regis" element={<Registration />} />
        <Route path="/regis2" element={<Registration2 />} />
        <Route path="/regis3" element={<Registration3 />} />
        <Route path="/regis-done" element={<RegisDone />} />
      </Routes>
    </>
  );
}

export default App;
