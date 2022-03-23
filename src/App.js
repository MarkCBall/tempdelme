
import './App.css';
// import {HelloWorld} from "@rbl/terminal-library/reactComponents/dist"
// import TokenSearch from "./tokenSearch";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TokenSearch from "./tokenSearch";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <br/><br/><br/><br/><br/><br/>
          Learn React
      <br/><br/>
      <TokenSearch/>
      </Provider>
    </div>
  );
}

export default App;
