// reducer存储信息
function SearchReducer(state='',action){
    switch(action.type){
        case 'SETKEYWORD': state = action.data
        return state;
        default :
            return state;
    }
}
export default SearchReducer;