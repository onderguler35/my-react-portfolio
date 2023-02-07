import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  const brand = "React - we are at your service!";
  
  return (
    <div className="App">
      <Header brand = {brand}/>
      <Main brand = {brand} />
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
