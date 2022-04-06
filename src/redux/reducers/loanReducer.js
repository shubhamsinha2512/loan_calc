
const loanReducer = (state=[], action) => {
    
    switch(action.type){
        case 'SET_LOANS': return [...action.payload]

    default: return state;
        
    }
}

export default loanReducer