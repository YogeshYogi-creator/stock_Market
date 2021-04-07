import axios from 'axios'
export const startGetCompany = () => {
    return(dispatch)=> {
        axios.get('https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=demo')
        .then((response)=>{
            const result = response.data
            console.log("result", result)
            dispatch(getCompany(result))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}
export const getCompany = (data) => {
    return {
        type: "COMPANY_DATA",
        payload: data
    }
}