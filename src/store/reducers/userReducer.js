function UserReducer(state='',action){
    switch(action.type){
        case 'SETUSER':
        state = action.data
        return state;
        default:
            return state;
    }
}
export default UserReducer;