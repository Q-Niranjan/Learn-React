import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import PageNotFount from "./pages/PageNotFound";
import ManageUseReducerrr from "./pages/ManageUseReducerr";
import Nav from "./Nav";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/reducer" element={<ManageUseReducerrr />} />
        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
