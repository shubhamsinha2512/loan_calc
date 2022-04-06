const testInitial = {
    email : "shubham.sinha2512@gmmail.com",
    isAdmin : true
}

const userReducer = (state=testInitial, action) => {
    
    switch(action.type){
        case "SET_USER": return action.payload;

        case "DELETE_USER": return null;
        
        default: return state;
    }
}

export default userReducer