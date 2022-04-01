import React from "react"
import { useDispatch, useSelector } from 'react-redux';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
//import 'react-accessible-accordion/dist/fancy-example.css';
import SearchNetworks from "./SearchNetworks";
import SearchExchanges from "./SearchExchanges";

import './../Components/accordion.css'

export const NetworkFilter = () => {
  const { isSelecting, searchText, isLoading, networkMap } = useSelector(
    (state) => state
  );

  console.log('networkMap: ', networkMap)
  return (<>
   <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton >
            Filter Networks
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
         {<SearchNetworks />}
         {<SearchExchanges />}
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>
  </>


  )
}

export default NetworkFilter