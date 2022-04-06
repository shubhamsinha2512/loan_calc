// const testInitial = {
//     email : "shubham.sinha2512@gmail.com",
//     // isAdmin : true
// }

const userReducer = (state=null, action) => {
    
    switch(action.type){
        case "SET_USER": return action.payload;

        case "DELETE_USER": return null;
        
        default: return state;
    }
}

export default userReducer