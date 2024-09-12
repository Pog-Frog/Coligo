import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login";
import Dashboard from './pages/dashboard';
import './App.css'
import Layout from './layouts';
import { selectUser } from "./store/store";


const App: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
}
export default App
