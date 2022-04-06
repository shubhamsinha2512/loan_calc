export const setUser = (user)=>{
    return {
        type: "SET_USER",
        payload: user
    }
}

export const deleteUser = (user)=>{
    return {
        type: "DELETE_USER",
        payload: user
    }
}

export const setLoans = (loans)=>{
    return {
        type: "SET_LOANS",
        payload: loan
    }
}

// export const deleteLoan = (loan)=>{
//     return {
//         type: "LOGIN",
//         payload: user
//     }
// }