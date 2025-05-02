import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Ycombinator from "./components/Ycombinator/Ycombinator"
import Login from './components/Login/Login';

function App() {
  return (
    <div style={{minWidth: "796px", width: "85%", background: "#f6f6ef", display:"flex", flexDirection: "column", marginTop:"5px"}}>
      <Header />
      <Ycombinator />
      <Footer />
      {/* <Login /> */}

    </div>
  );
}

export default App;
