import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Pagination />
      <Footer />
    </>
  );
  // return <Home />;
}

export default App;
