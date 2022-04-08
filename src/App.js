
import './App.css';
import tw from 'twin.macro';
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
        return `Awesome! ${c1} networks and ${c2} exchanges`
      },
      wrapperStyles: {

      },
      headerStyles: {
        hoverColor: "yellow",
        margin: "0"
      },
      networkStyles: {
        justifyContent: "right",
        alignItems: "bottom",
        margin: "12px",
        
      },

      exchangeStyles: {
        justifyContent: "left",
        alignItems: "top",
        margin: "10px",
         
      }
    }
  }

  return (
    <div tw="container mx-auto w-2/3 content-center mt-10">
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
