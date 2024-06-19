import "./App.css";
import Main from "./components/Main";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="h-screen grid grid-rows-[80%_20%] bg-[#170F23] ">
        <div className="grid grid-cols-[12.5%_70.3%_17.2%]">
          <Nav />
          <div className="px-[59px]">
            <Header />
            <Main />
          </div>
          <Sidebar />
        </div>
        <Music />
      </div>
    </div>
  );
}

export default App;
