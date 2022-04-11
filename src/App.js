
import './App.css';
import tw from 'twin.macro';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TokenSearch from "./tokenSearch";

import 'styled-components/macro'

const exchangeAction = (props) => {  
  const {detail} = props
  const handleClick = () => {
    console.log('Exchange: ', detail)
  }
  return (
    <div onClick={handleClick}>Exchange</div>
  )
}

const tableAction = () => {  
  const handleClick = () => {
    console.log('Table')
  }
  return (
    <div onClick={handleClick}>Table</div>
  )
}

const chartAction = () => {  
  const handleClick = () => {
    console.log('Chart')
  }
  return (
    <div onClick={handleClick}>Chart</div>
  )
}
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
        justifyContent: "center",
        alignItems: "center",
        margin: "12px",
        padding: "10px 0 0"         
      },

      exchangeStyles: {
        justifyContent: "left",
        alignItems: "top",
        margin: "5px 10px",
        padding: "0 10px 10px"         
      }
    },
    customChip: {
      styles: {
        checkedBackgroundColor: "red"
      }
    },
    customResult: {

    },
    customTokenDetail: {

    },
    customLoading: {

    }
  }   

  const customActions = [
    {
      index: 1,
      component: exchangeAction
    },
    {    
      index: 2,
      component: tableAction   
    },
    {   
      index: 3,
      component: chartAction
    },
  ]

  return (
    <div tw="container mx-auto w-2/3 content-center mt-10">
      <Provider store={store}>      
        <TokenSearch 
          customSearchInput={renderProps?.customSearchInput}
          customSearchFilter={renderProps?.customSearchFilter}
          customChip={renderProps?.customChip}
          customResult={renderProps?.customResult}
          customTokenDetail={renderProps?.customTokenDetail}
          customLoading={renderProps?.customLoading}
          customActions={customActions}
        />
      </Provider>
    </div>
  );
}

export default App;
