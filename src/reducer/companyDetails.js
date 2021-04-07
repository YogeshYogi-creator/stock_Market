const initialAddedCompany = []

const companyDetails = (state=initialAddedCompany, action) => {
    switch(action.type){
        case("COMPANY_DATA"): {
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default companyDetails