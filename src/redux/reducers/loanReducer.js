
const testLoan = [
    {
        loanId: 1234,
        email : 'shubham.sinha2512@gmail.com',
        amount : 100000,
        startDate : new Date().toLocaleDateString(),
        endDate : new Date().toLocaleDateString(),
        emi : 10000,
        type : 'Fixed',
        approved : false,
        rejected : false

    },
    {
        loanId: 3456,
        email : 'sumit.sinha2512@gmail.com',
        amount : 100000,
        startDate : new Date().toLocaleDateString(),
        endDate : new Date().toLocaleDateString(),
        emi : 10000,
        type : 'Fixed',
        approved : true,
        rejected : false
    },
    {
        loanId: 3333,
        email : 'neha.sinha2512@gmail.com',
        amount : 100000,
        startDate : new Date().toLocaleDateString(),
        endDate : new Date().toLocaleDateString(),
        emi : 10000,
        type : 'Fixed',
        approved : false,
        rejected : true

    },
]

const loanReducer = (state=testLoan, action) => {
    
    switch(action.type){
        case 'SET_LOANS': return [...action.payload]

    default: return state;
        
    }
}

export default loanReducer