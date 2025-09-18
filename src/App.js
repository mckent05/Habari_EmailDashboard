import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import "./App.css";
import MarketingDashboard from "./pages/MarketingDashboard";
import AppLayout from "./AppLayout";
import EmailDashboard from "./pages/EmailDashboard";
import { useEffect } from "react";
import { fetchUserProfile } from "./store/user/thunkCreators";
import { fetchUnreadCount } from "./store/emails/thunkCreators";

function App() {
  const dispatch = useDispatch();

  const { emails, isLoading } = useSelector((state) => state.emails);

  useEffect(() => {
    dispatch(fetchUnreadCount())
    dispatch(fetchUserProfile());
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MarketingDashboard />} />
          <Route
            path="app/emails"
            element={<EmailDashboard emails={emails} isLoading={isLoading} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
