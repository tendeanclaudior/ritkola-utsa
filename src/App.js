import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Login from "./pages/Login";
import List from "./pages/List";
import Registration from "./components/Registration";
import Registration2 from "./components/Registration2";
import RegisDone from "./components/RegisDone";
import Scan from "./components/Scan";
import ForgetPass from "./pages/ForgetPassword";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />

          <Route path="/regis" element={<Registration />} />
          <Route path="/regis2" element={<Registration2 />} />
          <Route path="/regis-done/:id" element={<RegisDone />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/forgetpas" element={<ForgetPass />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
