import React, {useEffect} from 'react'
import Cards from './Cards'
import Table1 from './Table1'
import {startGetCompany} from './action/actionCreator'
import CssBaseLine from '@material-ui/core/CssBaseline'
import {Grid, Paper} from '@material-ui/core'
import {useDispatch} from "react-redux" 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(startGetCompany())
    },[dispatch])
  return (
    <div>
    <Grid>
      <Paper>
          <img width = "15%" alt = "app logo" src = "https://ci3.googleusercontent.com/proxy/P7ljLklJiMVvAw6ErYAuokwU--iiMQ_8ROj2AI4aIrhPZ9sWXtbDHYyfdmrKMVZ0ATJbu1LOu1NhUieyJH1WUfw2l72grRHNSRCd20mEb90h4PG23xYaQ0Ag_HfEgZNJeZReiQj9iQf-cdrNyAGW8uIy_ry7IXDdQ87G8SRHXAqh52U0ZQqX44zq5S08ZrR_XqhnG-aOd_hVJ5OfYA=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1j-yTzcZXbKtlul61hBp55gwZrlGe_9dE&revid=0B9skVG_OgQvQU1loTGFxOHcwNXJJZFF6OEZ1UXdBNDcvRktJPQ"/>
      </Paper>
    </Grid>
    <div className = "container">
      <CssBaseLine/>
      <div style = {{marginTop: "20px"}}>
        <Cards/>
      </div>
      <div style = {{marginTop: "50px"}}>
        <Table1/>
      </div>
    </div>
    </div>
  )
}
export default App