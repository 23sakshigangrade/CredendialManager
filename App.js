// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { app, database } from "./firebase.config";
import Manager from "./components/Home/Pages/Manager";
import Generator from "./components/Home/Pages/Generator/Generator";
import Checker from "./components/Home/Pages/Checker/Checker";
// import NavBar from "./components/NavBar/NavBar";
import PhoneOtp from "./components/phone_otp_verification/src/Phone_Otp";
import Checkout from "./components/Gateway/Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/otp" element={<PhoneOtp database={database} />} />
          <Route path="/register" element={<Register database={database} />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manager" element={<Manager database={database} />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/checker" element={<Checker />} />
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
