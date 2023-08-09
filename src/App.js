import "./App.css";
import ProductList from "./ProductList";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Drawer />
      <LandingPage />
      <ProductList />
    </div>
  );
}

export default App;
