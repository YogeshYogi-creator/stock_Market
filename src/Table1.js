import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import MaterialTable from 'material-table'
// import Table from '@material-ui/core/Table';


const  Table1 = () => {

    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [currency, setCurrency] = useState('')
    const [stockExchange, setStockExchange] = ('')
    const [exchangeShortName, setExchangeShortName] = ('')

  const stockData = useSelector((state)=>{
      console.log("companies", state.company)
      return state.company
  })
  
  // useEffect(()=>{
  //   stockData.map(ele=>{
  //       setName(ele.name)
  //       setSymbol(ele.symbol)
  //       setCurrency(ele.currency)
  //       setStockExchange(ele.stockExchange)
  //       setExchangeShortName(ele.exchangeShortName)
  //   })
  // })

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(resp => resp.json())
//       .then(resp => {
//         setData(resp)
//       })
//   }, [])

  return (
      <div>

    <MaterialTable
      title="Stock Details"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Symbol', field: 'surname' },
        { title: 'Currency', field: 'birthYear', type: 'numeric' },
        { title: 'Stock Exchange', field: 'birthCity' },
        { title: 'Exchange ShortName', field: 'Exchange ShortName' },
        
      ]}

      data={[
        // { name: name, symbol: symbol, currency: currency, stockExchange: stockExchange, exchangeShortName: exchangeShortName },
        // { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}        
      options={{
        search: true
      }}
    />
  </div>
  )
}

export default Table1;