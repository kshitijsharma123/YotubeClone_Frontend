import "./App.css";
import HomePage from "./Components/HomePage";
import Header from "./Header/Header";

function App() {
  return (

    <div className="h-screen bg-black bg-opacity-90">
      <Header />
     <div className="h-12 w-full"></div>
     
      <div >
        <HomePage />
      </div>
    </div>

  );
}

export default App;
