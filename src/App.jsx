import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddFood from "./pages/AddFood/AddFood";
import Foods from "./pages/Foods/Foods";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pothe__pothe__admin__app__content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/add" element={<AddFood />} />
          <Route path="/admin/foods" element={<Foods />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
