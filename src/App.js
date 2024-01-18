import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./pages/Homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Detailpage from "./pages/Detailpage/Detailpage";
import Layout from "./Layout/Layout";
import Spinner from "./component/Spinner/Spinner";
import Booking from "./pages/Booking/Booking";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/detail/:maPhim" element={<Detailpage />}></Route>
            <Route path="/booking/:phim" element={<Booking />} />
          </Route>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/regist" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
