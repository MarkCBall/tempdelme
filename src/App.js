
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TokenSearch from "./tokenSearch";
import 'styled-components/macro'

function App() {
  return (
    <div tw="container mx-auto m-4">
      <Provider store={store}>      
        <TokenSearch />
      </Provider>
    </div>
  );
}

export default App;
