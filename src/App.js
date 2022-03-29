
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TokenSearch from "./tokenSearch";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/>
      <div style={{width:"500px", margin:"auto", border:"solid"}}>
        <TokenSearch />
        {/*  <iframe loading={"lazy"} src={"http://localhost:3000/cookieFramed.html"} height={500}/>*/}
      </div>
      </Provider>
    </div>
  );
}

export default App;
