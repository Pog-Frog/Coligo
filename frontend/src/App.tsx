import { RootState } from './store/store';
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login";
import './App.css'
import Layout from './layouts';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route element={<Layout />}>
        </Route>
      </Routes>
    </div>
  );
}
export default App
