
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
        input: {
         
        },
        icon: {

        }
      },
      placeholder: "You can search by token pairs here."
    },
    customSearchFilter: {
      
       
      styles: {
        wrapper: {

        },
        header: {
        
        },
        network: {
            
        },
        exchange: {
           
        }
      }
    },
    customChip: {
      styles: {
         
      }
    },
    customAllChip: {
      styles: {

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
          customWrapper={renderProps?.customWrapper}
          customAllChip={renderProps?.customAllChip}
        />
      </Provider>
    </div>
  );
}

export default App;
