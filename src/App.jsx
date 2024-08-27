import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="pothe__pothe__admin__app__content">
        <Sidebar />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
