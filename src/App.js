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
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/regis" 
            element={
            <ProtectedRoute>
               <Registration />
            </ProtectedRoute>
          } />
          <Route path="/regis2" 
            element={
            <ProtectedRoute>
              <Registration2 />
            </ProtectedRoute> 
          } />
          <Route path="/regis-done/:id" 
            element={
            <ProtectedRoute>
              <RegisDone />
            </ProtectedRoute>
          } />
          <Route path="/scan" 
            element={
            <ProtectedRoute>
              <Scan />
            </ProtectedRoute> 
          } />
          <Route path="/forgetpas" element={<ForgetPass />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
