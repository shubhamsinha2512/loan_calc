export const setUser = (user)=>{
    return {
        type: "SET_USER",
        payload: user
    }
}

export const deleteUser = ()=>{
    return {
        type: "DELETE_USER",
    }
}

export const setLoans = (loans)=>{
    return {
        type: "SET_LOANS",
        payload: loans
    }
}

// export const deleteLoan = (loan)=>{
//     return {
//         type: "LOGIN",
//         payload: user
//     }
// }