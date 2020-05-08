// reducer存储信息
function CityReducer(state='上海',action){
    switch(action.type){
        case 'SETCITY': state = action.data
        return state;
        default :return state;
    }
}
export default CityReducer