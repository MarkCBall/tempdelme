
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TokenSearch from "./tokenSearch";
import 'styled-components/macro'

function App() {
  const renderProps = {
    customSearchInput: {
      styles: {
        color: "red",
        borderColor: "green",
        background: "blue"
      },
      placeholder: "You can search by token pairs here."
    },
    customSearchFilter: {
      title: "You can filter",
      description: (c1, c2) => {
        return `No~~~~~ ${c1} networks and ${c2} exchanges`
      },
      headerStyles: {
        hoverColor: "yellow"
      }
    }
  }

  return (
    <div tw="container mx-auto m-4">
      <Provider store={store}>      
        <TokenSearch 
          customSearchInput={renderProps.customSearchInput}
          customSearchFilter={renderProps.customSearchFilter}
        />
      </Provider>
    </div>
  );
}

export default App;
