import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        {/* side bar */}
        <div className="sideBar">
          <SideBar />
        </div>

        {/* pages */}
        <div className="pages">
          <Home></Home>
        </div>
      </div>
    </>
  );
}

export default App;
