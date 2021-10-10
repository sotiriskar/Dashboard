import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import "./components/featuredInfo/featuredInfo";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
